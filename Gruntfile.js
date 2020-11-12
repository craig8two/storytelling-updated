module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');




    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            css: {
                files: ['*/*.css'],
                options: {
                    livereload: true,
                    spawn: false
                }
            },
            src: {
                files: ['*.html'],
                options: {
                    livereload: true,
                    spawn: false
                }
            }
        }
    });




    grunt.registerTask('default', ["watch"]);

};