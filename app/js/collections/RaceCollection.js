define([ 'backbone', 'racemodel' ], function(Backbone, RaceModel) {
    return Backbone.Collection.extend({
        model: RaceModel
    });
});