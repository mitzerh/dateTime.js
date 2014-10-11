module.exports = function(grunt) {

    var config = {

        pkg: grunt.file.readJSON('package.json'),

        clean: {
            'dest': 'js/*'
        },

        copy: {

            orig: {
                src: 'src/DateTime.js',
                dest: 'js/DateTime.js'
            },

            amd: {
                options: {
                    process: function(content, path) {
                        var banner = 'define("DateTime", [], function() {\n\n',
                            footer = '\n\nreturn DateTime;\n\n});';

                        var ret = banner + content + footer;
                        return ret;
                    }
                },
                src: 'src/DateTime.js',
                dest: 'js/DateTime.amd.js'
            }

        },

        jshint: {

            build: {

                options: grunt.file.readJSON('.jshintrc'),
                expand: true,
                src: ['src/**.js']

            }

        },

        uglify: {

            original: {

                options: {
                    mangle: true
                },
                expand: true,
                files: {
                    'js/DateTime.min.js': 'src/DateTime.js'
                }

            }

        }

    };

    // load npm's
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['clean', 'jshint', 'copy', 'uglify']);

    grunt.initConfig(config);

};