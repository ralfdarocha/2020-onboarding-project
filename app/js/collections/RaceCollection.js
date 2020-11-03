define([ 'backbone', 'cardmodel' ], function(Backbone, RaceModel) {
    return Backbone.Collection.extend({
        model: RaceModel,
        url: function() {
            return "https://omgvamp-hearthstone-v1.p.rapidapi.com/info";
        },
        parse: function(response) {
            return response.races.map(function(item) {
                return {name: item};
            });
        }
    });
});