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
        qualitymodel: 'models/QualityModel',
        racemodel: 'models/RaceModel',
        setmodel: 'models/SetModel',
        cardcollection: 'collections/CardCollection',
        classcollection: 'collections/ClassCollection',
        qualitycollection: 'collections/QualityCollection',
        racecollection: 'collections/RaceCollection',
        setcollection: 'collections/SetCollection',
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