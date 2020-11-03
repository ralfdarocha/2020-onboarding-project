define([ 
    'underscore', 
    'backbone', 
    'tpl!../templates/main.tpl',
], function(_, Backbone, mainView) {
    return function (cards) {
        return Backbone.View.extend({
            cards,
            initialize: async function() {
                await cards.fetch({cache: true, expires: 3600 });
                this.render();
            },
            render: function() {
                this.$el.html(
                    mainView({
                        cards: JSON.stringify(this.cards)
                    })
                );
            }
        });
    }
});
