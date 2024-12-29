module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      build: ['dist'],
    },
    concat: {
      js: {
        src: ['src/**/*.js'],
        dest: 'dist/bundle.js',
      },
    },
    uglify: {
      build: {
        files: {
          'dist/bundle.min.js': ['dist/bundle.js'],
        },
      },
    },
    watch: {
      scripts: {
        files: ['src/**/*.js'],
        tasks: ['build'],
      },
    },
  })

  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.registerTask('build', ['clean', 'concat', 'uglify'])
}
