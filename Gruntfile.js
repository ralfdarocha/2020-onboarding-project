module.exports = function (grunt) {
    grunt.initConfig({
        watch: {},
        clean: ["dist"],
        run: {
            exec: "cd reactstone-app && npm install && npm test && npm build",
        },
        copy: {
          main: {
            files: [
              {
                src: ["app/**"],
                dest: "dist/",
              },
              {
                src: ["reactstone-app/dist/bundle.js"],
                dest: "dist/reactstone-app/dist/bundle.js",
              },
            ],
          },
        },
        cssmin: {
          target: {
            files: [
              {
                expand: true,
                cwd: "dist/app/styles",
                src: ["*.css"],
                dest: "dist/app/styles",
                ext: ".css",
              },
            ],
          },
        },
        uglify: {
          all: {
            files: [
              {
                expand: true,
                src: ["dist/app/**/*.js"],
                dest: "",
                ext: ".js",
              },
            ],
          },
        },
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
    grunt.loadNpmTasks("grunt-run");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    // define default task
    grunt.registerTask('default', ['browserSync']);
    // Register the build task
    grunt.registerTask('build', [
        'clean',
        'run',
        'copy',
        "cssmin",
        "uglify",
    ]);
};