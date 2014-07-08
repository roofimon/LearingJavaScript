module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        // This line makes your node configurations available for use
        pkg: grunt.file.readJSON('package.json'),
        // This is where we configure JSHint
        jshint: {
            // You get to make the name
            // The paths tell JSHint which files to validate
            myFiles: ['src/**/*.js', 'test/**/*.js']
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                autoWatch: true
            }
        }
    });
    // Each plugin must be loaded following this pattern
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
};
