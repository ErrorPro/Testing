module.exports = function(config) {
    config.set({

        basePath: '',
        frameworks: ['browserify', 'jasmine', 'sinon'],

        files: [
            'src/**/*.js',
            'test/**/*.js'
        ],

        exclude: [
        ],

        preprocessors: {
            'src/**/*.js': ['browserify'],
            'test/**/*.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: [ 'babelify' ]
        },

        browsers: ['Chrome'],

        customLaunchers: {
          Chrome_without_security: {
            base: 'Chrome',
            flags: ['--disable-web-security']
          }
        }
    });
};
