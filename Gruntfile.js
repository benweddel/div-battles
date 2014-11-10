module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'styles/style.css': 'styles/style.scss' // 'destination': 'source'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },
    // autoprefixer: {
    //   options: {
    //       browsers: ['last 2 versions', 'ie 8', 'ie 9', 'ios 7']
    //     },
    //     your_target: {
    //       // Target-specific file lists and/or options go here.
    //     },
    //   }
  });

  // Default task(s).
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass','watch']);
};