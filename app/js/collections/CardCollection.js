define([ 'backbone', 'cardmodel' ], function(Backbone, CardModel) {
    return Backbone.Collection.extend({
        model: CardModel,
        url_complement: '',
        url: function() {
            return `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards${this.url_complement}`;
        },
        parse: function(response) {
            if (this.url_complement !== '') {
                return response.filter((item) => item.img !== undefined);
            } else {
                var cards = [];
                var keys = Object.keys(response);
                for (var i in keys){
                    cards = cards.concat(response[keys[i]]);
                }
                return cards.filter((item) => item.img !== undefined);
            }
        }
    });
});