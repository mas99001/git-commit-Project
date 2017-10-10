module.exports = function(grunt) {
    // Load all NPM grunt tasks
    require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);
  
    // Project configuration
    grunt.initConfig({
  
      // git fetch -A
      gitfetch: {
        task: {
          options: {
            all: true,
            cwd: 'git-commit-Child-Project'
          }
        }
      },

      // git pull
      gitpull: {
        task: {
          options: {
            cwd: 'git-commit-Child-Project'
          }
        }
      },

      // git add -A
      gitadd: {
        task: {
          options: {
            force: true,
            all: true,
            cwd: 'git-commit-Child-Project'
          }
        }
      },
  
      // git commit -m "Repository updated on <current date time>"
      gitcommit: {
        task: {
          options: {
            message: 'Repository updated on ' + grunt.template.today(),
            allowEmpty: true,
            cwd: 'git-commit-Child-Project'
          }
        }
      },
  
      // git push origin master
      gitpush: {
        task: {
          options: {
            remote: 'origin',
            branch: 'master',
            cwd: 'git-commit-Child-Project'
          }
        }
      }
    });
  
    // Create task
    grunt.registerTask('git', [
      'gitfetch',
      'gitpull',
      'gitadd',
      'gitcommit',
      'gitpush'
    ]);
  
    // Register default task
    grunt.registerTask('default', ['git']);
  
  };