module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        sass: {
            options: {
                outputStyle: 'compressed',
                sourceMap: true
            },
            dist: {
                files: {
                    './css/main.css': './scss/main.scss'
                }
            }
        },

        watch: {
            sass: {
                files: ['./scss/**/*.scss'],
                tasks: ['sass'],
            }
        }
    });

    grunt.registerTask('default', ['watch']);
};
