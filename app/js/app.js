require([ 
    'backbone',
    'mainview',
    'cardcollection',
    'classcollection',
    'qualitycollection',
    'racecollection',
    'setcollection',
    'rapidapi',
    'reactstone',
], (Backbone, MainView, CardCollection, ClassCollection, QualityCollection, RaceCollection, SetCollection, config) => {
    // Rapid API headers Configuration
    Backbone.ajax = function() {
        arguments[0].headers = {
            "x-rapidapi-host": config.rapidapiHost,
            "x-rapidapi-key": config.rapidapiKey
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
    window.addEventListener("onClassChange", (event) => {
        mainView.changeClass(event.detail.slug);
    });
    // Triggers when user specifies a race
    window.addEventListener("onRaceChange", (event) => {
        mainView.changeRace(event.detail.slug);
    });
    // Triggers when user specifies a quality
    window.addEventListener("onQualityChange", (event) => {
        mainView.changeQuality(event.detail.slug);
    });
    // Triggers when user specifies a set
    window.addEventListener("onSetChange", (event) => {
        mainView.changeSet(event.detail.slug);
    });
    // Triggers when all filters are reseted
    window.addEventListener("onManaCostChange", (event) => {
        mainView.changeCost(event.detail.cost);
    });
    // Triggers when all filters are reseted
    window.addEventListener("onResetFilters", () => {
        mainView.loadAll();
    });
});