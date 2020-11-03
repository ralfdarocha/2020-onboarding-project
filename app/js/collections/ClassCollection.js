define([ 'backbone', 'cardmodel' ], function(Backbone, ClassModel) {
    return Backbone.Collection.extend({
        model: ClassModel,
        url: function() {
            return "https://omgvamp-hearthstone-v1.p.rapidapi.com/info";
        },
        parse: function(response) {
            return response.classes.map(function(item) {
                return {name: item};
            });
        }
    });
});