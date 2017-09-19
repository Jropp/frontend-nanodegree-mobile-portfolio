module.exports = function(grunt) {
    grunt.initConfig({
        uglify : {
            
                options : {
                    banner : "/*! perfmatters.min.js file */\n"
                },
                build : {
                    src : ["js/perfmatters.js"],
                    dest : "js/perfmatters.min.js"
                }
            
            },
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('imagemin', ['imagemin']); // execute on both .png and .jpg
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask("default", ["uglify"]);
}
