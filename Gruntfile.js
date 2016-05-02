module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-ts');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './'
                }
            }
        },
        ts: {
            default : {
                src: ["**/*.ts", "!node_modules/**/*.ts"],
                out: 'js/out.js'
            }
        },
        watch: {
            files: '**/*.ts',
            tasks: ['ts']
        },
        open: {
            dev: {
                path: 'http://localhost:8080/index.html'
            }
        }
    });

    grunt.registerTask('default', ['ts', 'connect', 'open', 'watch']);
};
