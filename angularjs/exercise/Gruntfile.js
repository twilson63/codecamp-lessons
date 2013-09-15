var srcFiles = [
  'app/app.js',
  'app/controllers/**/*.js'
];

module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      dist: {
        src: srcFiles,
        dest: 'js/app.js'
      }
    },
    jshint: {
      src: srcFiles
    },
    connect: {
      server: {
        options: {
          keepalive: true
        }
      }
    },
    watch: {
      app: {
        files: srcFiles,
        tasks: ['jshint', 'concat']
      }
    },
    concurrent: {
      server: {
        tasks: ['connect:server', 'watch'],
        options: { logConcurentOutput: true }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');

  grunt.registerTask('default', ['jshint', 'concat']);
}
