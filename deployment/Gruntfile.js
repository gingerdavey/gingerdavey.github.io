module.exports = function (grunt) {
    grunt.initConfig({
        // get the configuration info from package.json
        pkg: grunt.file.readJSON('package.json'),
        themelibraryPath: '../library',

        // PostCSS - Tailwindcss and Autoprefixer
        postcss: {
            options: {
                map: true, // inline sourcemaps
                processors: [
                    require('tailwindcss')(),
                    require('autoprefixer')({ browsers: 'last 2 versions' }) // add vendor prefixes
                ]
            },
            dist: {
                expand: true,
                cwd: '<%= themelibraryPath %>/tailwind',
                src: ['tailwind.css'],
                dest: '<%= themelibraryPath %>/css',
                ext: '.css'
            }
        },


        // Watch for changes and run Tasks
        watch: {
            postcss: {
                files: '<%= themelibraryPath %>/tailwind/tailwind.css',
                tasks: ['compile-tailwindcss'],
                options: {
                    interrupt: true
                }
            }
        }
    })

    // Load Grunt Plugins
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-postcss')
    grunt.loadNpmTasks('grunt-css-import');

    // Register Tasks
    grunt.registerTask('compile-tailwindcss', ['postcss'])

    // Resgiter Watcher Tasks
    grunt.registerTask('watch-tailwindcss', ['watch:postcss'])

    //FOR PRODUCTION RUN THIS COMMAND
    // $env:NODE_ENV="production"
    // export NODE_ENV=production
}