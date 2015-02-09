module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      npm: {
        command : "npm install"
      }
    },
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 2,
          sourceMap: true,
          dumpLineNumbers: 'all',
        },
        files: {
          "style.css": "styles/less/style.less"
        }
      }
    },
    watch: {
      less: {
        files: ['styles/less/style.less'],
        tasks: ['less'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      npm: {
        files: ['package.json'],
        tasks: ['shell:npm']
      }
    },
    lesslint: {
      options: {
        csslint: {
          'important': false,
          'ids': false,
          'adjoining-classes': false,
          'unique-headings' : false,
          'qualified-headings': false,
          'floats': false,
        },
        less:{
          paths: ['styles/less/']
        },
      },
      src: ['styles/less/style.less']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-lesslint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('less-lint', ['lesslint']);
  grunt.registerTask('default', ['shell:npm', 'less', 'watch']);
};