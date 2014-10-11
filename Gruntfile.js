module.exports = function(grunt) {

    var conf = grunt.file.readJSON('package.json');

    // comment banner
    var comment = [
        '/**',
        conf.name + ' v' + conf.version + ' | ' + grunt.template.today("yyyy-mm-dd"),
        conf.description,
        'by ' + conf.author,
        conf.license,
    ].join('\n* ') + '\n**/';

    var config = {

        pkg: grunt.file.readJSON('package.json'),

        clean: {
            'dest': 'js/*'
        },

        copy: {

            orig: {
                options: {
                    process: function(content) {
                        content = [comment, content].join('\n\n');
                        return content;
                    }
                },
                src: 'src/DateTime.js',
                dest: 'js/DateTime.js'
            },

            jquery: {
                options: {
                    banner: comment + '\n',
                    process: function(content, path) {

                        // replace declaration
                        content = content.replace('var DateTime =', 'jQuery.DateTime = ');
                        content = [comment, content].join('\n\n');
                        return content;
                    }
                },
                src: 'src/DateTime.js',
                dest: 'js/jquery.fn.DateTime.js'
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
                    mangle: true,
                    banner: comment + '\n'
                },
                files: {
                    'js/DateTime.min.js' : 'js/DateTime.js',
                    'js/jquery.fn.DateTime.min.js' : 'js/jquery.fn.DateTime.js'
                }

            }

        }

    };

    var removeBlock = function(regex, content) {

        // var regex = /(block\:jquery+\s)(.*)\/\1/i;
        var matches = content.match(regex);

        if (matches && matches[0]) {
            content = content.replace(matches[0], '');
        }

        return content;
    };

    // load npm's
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['clean', 'jshint', 'copy', 'uglify']);

    grunt.initConfig(config);

};