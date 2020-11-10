require([ 
    'backbone',
    'mainview',
    'cardcollection',
    'classcollection',
    'qualitycollection',
    'racecollection',
    'setcollection',
    'reactstone',
], function(Backbone, MainView, CardCollection, ClassCollection, QualityCollection, RaceCollection, SetCollection) {
    // Rapid API headers Configuration
    Backbone.ajax = function() {
        arguments[0].headers = {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "42b9739520mshf8a90f6e6b85152p1f6030jsn2d2262e748e3"
        };
        return Backbone.$.ajax.apply(Backbone.$, arguments);		
    };
    // Create the collections
    var cards = new CardCollection();
    var classes = new ClassCollection();
    var qualities = new QualityCollection();
    var races = new RaceCollection();
    var sets = new SetCollection();
    // Create the view with the given collections
    var mainView = new (MainView(cards, classes, qualities, races, sets))({
        el: '#root'
    });
    // Triggers when user specifies a class
    window.addEventListener("onClassChange", function(event) {
        mainView.changeClass(event.detail.slug);
    });
    // Triggers when user specifies a race
    window.addEventListener("onRaceChange", function(event) {
        mainView.changeRace(event.detail.slug);
    });
    // Triggers when user specifies a quality
    window.addEventListener("onQualityChange", function(event) {
        mainView.changeQuality(event.detail.slug);
    });
    // Triggers when user specifies a set
    window.addEventListener("onSetChange", function(event) {
        mainView.changeSet(event.detail.slug);
    });
    // Triggers when all filters are reseted
    window.addEventListener("onManaCostChange", function(event) {
        mainView.changeCost(event.detail.cost);
    });
    // Triggers when all filters are reseted
    window.addEventListener("onResetFilters", function() {
        mainView.loadAll();
    });
});