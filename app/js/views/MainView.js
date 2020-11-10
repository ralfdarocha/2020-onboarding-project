define([ 
    'underscore', 
    'backbone', 
    'tpl!../templates/main.tpl',
], function(_, Backbone, mainView) {
    return function (cards, classes, qualities, races, sets) {
        return Backbone.View.extend({
            fetchXhr: null,
            cards: cards, 
            classes: classes,
            qualities: qualities,
            races: races,
            sets: sets,
            initialize: function() {
                this.listenTo(this.sets, "set", this.render);
                // Check if the metadata is cached
                if (localStorage.getItem('filters')) {
                    // Populate the filter collections
                    this.populateCollections(JSON.parse(localStorage.getItem('filters')));
                } else {
                    // Fetch the initial metadata to fill the filters
                    $.ajax({
                        type: "GET",
                        beforeSend: function(request) {
                            request.setRequestHeader("x-rapidapi-host", 'omgvamp-hearthstone-v1.p.rapidapi.com');
                            request.setRequestHeader("x-rapidapi-key", '42b9739520mshf8a90f6e6b85152p1f6030jsn2d2262e748e3');
                        },
                        cache:true,
                        url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/info",
                        success: function(response) {
                            var filters = {
                                'classes': response.classes.filter(function(item) {
                                    return ['Death Knight', 'Dream'].indexOf(item) === -1
                                }).map(function(item) {
                                    return {name: item};
                                }),
                                'qualities': response.qualities.map(function(item) {
                                    return {name: item};
                                }),
                                'races': response.races.map(function(item) {
                                    return {name: item};
                                }),
                                'sets': response.sets.map(function(item) {
                                    return {name: item};
                                })
                            }
                            // Stores the filters on the LocalStorage
                            localStorage.setItem('filters', JSON.stringify(filters));
                            // Populate the filter collections
                            this.populateCollections(filters);
                        }.bind(this),
                        error: function() {
                            // Render the app
                            this.render();
                            // In case of error, sends 
                            window.dispatchEvent(
                                new CustomEvent("errorLoadingMetadata", {
                                    detail: { error: 'An error has occurred.' },
                                })
                            );
                        }.bind(this),
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
            },
            fetchCards: function(complement, options) {
                // Creates the default settings
                var settings = $.extend( {}, {
                    cache: true, 
                    expires: 3600,
                    data: { collectible: 1 },
                    processData: true,
                    success: function(){
                        window.dispatchEvent(
                            new CustomEvent("onLoadCards", {
                                detail: { cards: this.cards.toJSON() },
                            })
                        );
                    }.bind(this),
                    error: function(collection, response, options){
                        if (response.statusText !== 'abort') {
                            window.dispatchEvent(
                                new CustomEvent("errorLoadingCards", {
                                    detail: { message: response.responseJSON && response.responseJSON.message ? response.responseJSON.message : 'An error has occurred.' },
                                })
                            );
                        }
                    }.bind(this)
                }, options);
                //Stop pending fetch
                if(this.fetchXhr != null && this.fetchXhr.readyState > 0 && this.fetchXhr.readyState < 4){
                    this.fetchXhr.abort();
                }
                // Places a complemenent at the collection url for correct filtered request
                if (complement != null)
                    this.cards.url_complement = complement;
                // Request the cards from the API
                this.fetchXhr = this.cards.fetch(settings);
            },
            loadAll: function () {
                this.fetchCards('');
            },
            changeClass: function (classSlug) {
                this.fetchCards('/classes/' + classSlug);
            },
            changeQuality: function (qualitySlug) {
                this.fetchCards('/qualities/' + qualitySlug);
            },
            changeRace: function (raceSlug) {
                this.fetchCards('/races/' + raceSlug);
            },
            changeSet: function (setSlug) {
                this.fetchCards('/sets/' + setSlug);
            },
            changeCost: function (manaCost) {
                if (manaCost == null) {
                    this.fetchCards(null);
                } else {
                    this.fetchCards(null, {data: { cost: manaCost, collectible: 1 }});
                }
            },
        });
    }
});
