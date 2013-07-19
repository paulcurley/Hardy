module.exports = function(grunt) {
  grunt.initConfig({
    jasmine_node: {
      specFolders: ["./tests/spec"],
      specNameMatcher: "spec", // load only specs containing specNameMatcher
      projectRoot: ".",
      requirejs: false,
      forceExit: true,
      jUnit: {
        report: false,
        savePath: "./tests/reports/jasmine/",
        useDotNotation: true,
        consolidate: true
      }
    },
    shell: {
        acceptanceTests: {
            command: './test.sh',
            options: {
                stdout: true,
                execOptions: {
                    cwd: './tests/acceptance'
                }
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-node');

  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('unit', 'jasmine_node');
  grunt.registerTask('acceptance', 'shell');
  grunt.registerTask('test', ['jasmine_node', 'shell']);

};