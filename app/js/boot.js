requirejs.config({
    paths: {
        jquery: '../vendor/jquery-3.5.1.min',
        underscore: '../vendor/underscore-min',
        backbone: '../vendor/backbone-min',
        backbonecache: '../vendor/backbone.fetch-cache.min',
        tpl: '../vendor/tpl',
        reactstone: '../../reactstone-app/dist/bundle',
        cardmodel: 'models/CardModel',
        classmodel: 'models/ClassModel',
        racemodel: 'models/RaceModel',
        cardcollection: 'collections/CardCollection',
        classcollection: 'collections/ClassCollection',
        racecollection: 'collections/RaceCollection',
        mainview: 'views/mainview',
    },
    shim: {
        backbonecache: {
            deps: ['underscore', 'backbone'],
            exports: 'Backbone',
        }
    },
});
requirejs(["app"]);