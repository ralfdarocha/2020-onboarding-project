define([ 'backbone', 'classmodel' ], function(Backbone, ClassModel) {
    return Backbone.Collection.extend({
        model: ClassModel
    });
});