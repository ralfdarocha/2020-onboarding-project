define([ 'backbone', 'setmodel' ], function(Backbone, SetModel) {
    return Backbone.Collection.extend({
        model: SetModel
    });
});