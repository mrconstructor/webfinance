module.exports = function(config) {
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/view*/**/*.js',
      'app/*view/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    // Coverage
    reporters: ['progress', 'coverage'],
    preprocessors: {
      '**/view*/**/!(*test).js': ['coverage'],
      '**/*view/**/!(*test).js': ['coverage']
    }//,
    //coverageReporter: {
    //  type: 'cobertura',
    //  dir: 'coverage/',
    //  file: 'coverage.xml'
    //}
  });
};
