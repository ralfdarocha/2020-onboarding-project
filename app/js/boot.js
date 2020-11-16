requirejs.config({
    paths: {
        jquery: '../vendor/jquery-3.5.1.min',
        underscore: '../vendor/underscore-min',
        backbone: '../vendor/backbone-min',
        tpl: '../vendor/tpl',
        reactstone: '../../reactstone-app/dist/reactstone',
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
        mainview: 'views/MainView',
        rapidapi: 'rapidapi'
    },
    shim: {
        backbonecache: {
            deps: ['underscore', 'backbone'],
            exports: 'Backbone',
        }
    },
});
requirejs(["app"]);