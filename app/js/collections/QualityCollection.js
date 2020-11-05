define([ 'backbone', 'qualitymodel' ], function(Backbone, QualityModel) {
    return Backbone.Collection.extend({
        model: QualityModel
    });
});