define([ 'backbone' ], function(Backbone) {
    return Backbone.Model.extend({
        defaults: {
            cardId: '',
            dbfId: '',
            name: '',
            cardSet: '',
            type: '',
            text: null,
            race: '',
            playerClass: '',
            locale: '',
            mechanics: null,
            health: null,
            img: null,
            imgGold: null,
            artist: null,
            rarity: null,
            cost: null,
            attack: null,
            flavor: null,
            collectible: null,
            faction: null,
            multiClassGroup: null,
            classes: null,
            howToGet: null,
            howToGetGold: null,
            elite: null,
        }
    });
});
