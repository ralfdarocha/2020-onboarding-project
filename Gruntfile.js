module.exports = function (grunt) {
    grunt.initConfig({
        watch: {},
        browserSync: {
            default_options: {
                bsFiles: {
                    src : [
                        './app/js/**/*.js',
                        './app/*.html',
                        './app/templates/*.tpl',
                        './reactstone-app/dist/bundle.js'
                    ]
                },
                options: {
                    watch: true,
                    server: {
                        baseDir: "./",
                        index: "app/index.html"
                    }
                }
            }
        }
    });
    // load npm tasks
    grunt.loadNpmTasks('grunt-browser-sync');
    // define default task
    grunt.registerTask('default', ['browserSync']);
};