define([ 
    'underscore', 
    'backbone', 
    'tpl!../templates/main.tpl',
    'rapidapi'
], (_, Backbone, mainView, config) => {
    return (cards, classes, qualities, races, sets) => {
        let cardsCost = null;
        return Backbone.View.extend({
            fetchXhr: null,
            cards: cards, 
            classes: classes,
            qualities: qualities,
            races: races,
            sets: sets,
            initialize: function() {
                // Check if the metadata is cached
                if (localStorage.getItem('filters')) {
                    // Populate the filter collections
                    this.populateCollections(JSON.parse(localStorage.getItem('filters')));
                } else {
                    // Fetch the initial metadata to fill the filters
                    $.ajax({
                        type: "GET",
                        beforeSend: (request) => {
                            request.setRequestHeader("x-rapidapi-host", config.rapidapiHost);
                            request.setRequestHeader("x-rapidapi-key", config.rapidapiKey);
                        },
                        cache:true,
                        url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/info",
                        success: (response) => {
                            var filters = {
                                'classes': response.classes.filter((item) => ['Death Knight', 'Dream'].includes(item) === false).map((item) => ({name: item})),
                                'qualities': response.qualities.map((item) => ({name: item})),
                                'races': response.races.map((item) => ({name: item})),
                                'sets': response.sets.map((item) => ({name: item}))
                            }
                            // Stores the filters on the LocalStorage
                            localStorage.setItem('filters', JSON.stringify(filters));
                            // Populate the filter collections
                            this.populateCollections(filters);
                        },
                        error: () => {
                            // Render the app
                            this.render();
                            // In case of error, sends 
                            window.dispatchEvent(
                                new CustomEvent("errorLoadingMetadata", {
                                    detail: { error: 'An error has occurred.' },
                                })
                            );
                        },
                    });
                }
            },
            render: function() {
                this.$el.html(
                    mainView({
                        classes: _.escape(JSON.stringify(this.classes)),
                        qualities: _.escape(JSON.stringify(this.qualities)),
                        races: _.escape(JSON.stringify(this.races)),
                        sets: _.escape(JSON.stringify(this.sets)),
                    })
                );
            },
            populateCollections: function(filters) {
                // Populate the filters
                this.classes.set(filters.classes);
                this.qualities.set(filters.qualities);
                this.races.set(filters.races);
                this.sets.set(filters.sets);
                // Render the app
                this.render();
                // Starts to load all cards
                setTimeout(() => {
                    this.loadAll();
                }, 50);
            },
            dispatchCards: function() {
                // Pick all cards or filter by mana cost
                const cards = cardsCost !== null ? this.cards.filterByCost(cardsCost) : this.cards.toJSON();
                // Dispatch the custom event
                window.dispatchEvent(
                    new CustomEvent("onLoadCards", {
                        detail: { cards: cards },
                    })
                );
                $('html,body').animate({ scrollTop: 0 }, 200);
            },
            fetchCards: function(complement = '', options = {}) {
                // Creates the default settings
                const settings = {
                    cache: true, 
                    expires: 3600,
                    data: { collectible: 1 },
                    processData: true,
                    success: () => {
                        // When the request are not stored and has no filters it saves on the localStorage
                        if (!localStorage.getItem(complement)) {
                            localStorage.setItem(complement, JSON.stringify(this.cards.toJSON()));
                        }
                        this.dispatchCards();
                    },
                    error: (collection, response, options) => {
                        if (response.statusText !== 'abort') {
                            window.dispatchEvent(
                                new CustomEvent("errorLoadingCards", {
                                    detail: { message: response.responseJSON && response.responseJSON.message ? response.responseJSON.message : 'An error has occurred.' },
                                })
                            );
                        }
                    },
                    ...options
                }
                //Stop pending fetch
                if(this.fetchXhr !== null && this.fetchXhr.readyState > 0 && this.fetchXhr.readyState < 4){
                    this.fetchXhr.abort();
                }
                // Places a complemenent at the collection url for correct filtered request
                this.cards.url_complement = complement;
                // Check if the desired request is already stored at the localStorage
                if (localStorage.getItem(complement)) {
                    // Set the cards
                    this.cards.set(JSON.parse(localStorage.getItem(complement)));
                    // Request the cards from the localstorage
                    settings.success();
                } else {
                    // Request the cards from the API
                    this.fetchXhr = this.cards.fetch(settings);
                }
            },
            loadAll: function() {
                this.fetchCards('');
            },
            changeClass: function(classSlug) {
                this.fetchCards(`/classes/${classSlug}`);
            },
            changeQuality: function(qualitySlug) {
                this.fetchCards(`/qualities/${qualitySlug}`);
            },
            changeRace: function(raceSlug) {
                this.fetchCards(`/races/${raceSlug}`);
            },
            changeSet: function(setSlug) {
                this.fetchCards(`/sets/${setSlug}`);
            },
            changeCost: function(manaCost) {
                // Defines the cost to be filtered on others requests:
                cardsCost = manaCost;
                // Dispatch the Cards
                this.dispatchCards();
            },
        });
    }
});
