require([ 
    'backbonecache',
    'mainview',
    'cardcollection',
    'reactstone',
], function(Backbone, MainView, CardCollection) {
    Backbone.ajax = function() {
        arguments[0].headers = {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "42b9739520mshf8a90f6e6b85152p1f6030jsn2d2262e748e3"
        };
        return Backbone.$.ajax.apply(Backbone.$, arguments);		
    };
    var cards = new CardCollection();
    var mainView = new (MainView(cards))({
        el: '#root'
    });

    // var cards = new CardCollection();
    // var races = new RaceCollection();
    // var classes = new ClassCollection();
    // // cards.fetch({cache: true, expires: 3600 });
    // races.fetch({cache: true, expires: 3600 });
    // classes.fetch({cache: true, expires: 3600 });
});