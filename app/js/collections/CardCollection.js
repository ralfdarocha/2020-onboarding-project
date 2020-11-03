define([ 'backbone', 'cardmodel' ], function(Backbone, CardModel) {
    return Backbone.Collection.extend({
        model: CardModel,
        url: function() {
            return "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards";
        },
        parse: function(response) {
            var cards = [];
            var keys = Object.keys(response);
            for (var i in keys){
                cards = cards.concat(response[keys[i]]);
            }
            return cards;
        }
    });
});