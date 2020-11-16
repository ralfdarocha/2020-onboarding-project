module.exports = function (grunt) {
    grunt.initConfig({
        watch: {},
        clean: ["dist"],
        run: {
          commands: {
            exec: "cd reactstone-app && npm install && npm run release",
          }
        },
        copy: {
          main: {
            files: [
              {
                expand: true,
                cwd: 'app/',
                src: ['**'],
                dest: 'dist/',
              },
              {
                src: ["reactstone-app/dist/reactstone.js"],
                dest: "dist/vendor/reactstone.js",
              },
            ],
          },
        },
        replace: {
          bootjs: {
            options: {
              patterns: [
                {
                  match: /..\/..\/reactstone-app\/dist/g,
                  replacement: '../vendor'
                }
              ]
            },
            files: [
              {
                expand: true, 
                flatten: true, 
                src: ['dist/js/boot.js'], 
                dest: 'dist/js/'
              }
            ]
          },
          indexhtml: {
            options: {
              patterns: [
                {
                  match: /\"app\//g,
                  replacement: '"'
                }
              ]
            },
            files: [
              {
                expand: true, 
                flatten: true, 
                src: ['dist/index.html'], 
                dest: 'dist/'
              }
            ]
          },
        },
        cssmin: {
          target: {
            files: [
              {
                expand: true,
                cwd: "dist/styles",
                src: ["*.css"],
                dest: "dist/styles",
                ext: ".css",
              },
            ],
          },
        },
        babel: {
          options: {
            sourceMap: false,
            presets: ['@babel/preset-env']
          },
          dist: {
            files: [
              {
                expand: true,
                src: ["dist/js/**/*.js"],
                dest: "",
                ext: ".js",
              },
            ]
          }
        },
        uglify: {
          all: {
            files: [
              {
                expand: true,
                src: ["dist/js/**/*.js"],
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
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    // define default task
    grunt.registerTask('default', ['browserSync']);
    // Register the dist task
    grunt.registerTask('dist', [
        'clean',
        'run',
        'copy',
        'replace',
        'cssmin',
        'babel',
        'uglify',
    ]);
};