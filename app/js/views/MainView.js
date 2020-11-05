define([ 
    'underscore', 
    'backbone', 
    'tpl!../templates/main.tpl',
], function(_, Backbone, mainView) {
    return function (cards, classes, qualities, races, sets) {
        return Backbone.View.extend({
            fetchXhr: null,
            cards, 
            classes,
            qualities,
            races,
            sets,
            initialize: function() {
                $.ajax({
                    type: "GET",
                    beforeSend: function(request) {
                        request.setRequestHeader("x-rapidapi-host", 'omgvamp-hearthstone-v1.p.rapidapi.com');
                        request.setRequestHeader("x-rapidapi-key", '42b9739520mshf8a90f6e6b85152p1f6030jsn2d2262e748e3');
                    },
                    cache:true,
                    url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/info",
                    success: function(response) {
                        this.classes.set(response.classes.filter(function(item) {
                            return ['Death Knight', 'Dream'].indexOf(item) === -1
                        }).map(function(item) {
                            return {name: item};
                        }));
                        this.qualities.set(response.qualities.map(function(item) {
                            return {name: item};
                        }));
                        this.races.set(response.races.map(function(item) {
                            return {name: item};
                        }));
                        this.sets.set(response.sets.map(function(item) {
                            return {name: item};
                        }));
                        this.render();
                    }.bind(this)
                });
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
            fetchCards: async function(complement, options) {
                var settings = $.extend( {}, {
                    cache: true, 
                    expires: 3600,
                    data: { collectible: 1 },
                    processData: true
                }, options);
                //Stop pending fetch
                console.log(this.fetchXhr);
                if(this.fetchXhr != null && this.fetchXhr.readyState > 0 && this.fetchXhr.readyState < 4){
                    this.fetchXhr.abort();
                }
                if (complement != null)
                    this.cards.url_complement = complement;
                this.fetchXhr = this.cards.fetch(settings).done(function(){
                    window.dispatchEvent(
                        new CustomEvent("onLoadCards", {
                            detail: { cards: this.cards.toJSON() },
                        })
                    );
                }.bind(this));
                
            },
            loadAll: function () {
                this.fetchCards('');
            },
            changeClass: function (classSlug) {
                this.fetchCards(`/classes/${classSlug}`);
            },
            changeQuality: function (qualitySlug) {
                this.fetchCards(`/qualities/${qualitySlug}`);
            },
            changeRace: function (raceSlug) {
                this.fetchCards(`/races/${raceSlug}`);
            },
            changeSet: function (setSlug) {
                this.fetchCards(`/sets/${setSlug}`);
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
