// Place third party dependencies like jQuery in the lib folder

// Configure loading modules from the lib directory
// except for 'app' ones which are in a sibling directory
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app'
    }
});

// start loading the main app file
// put application logic in there
requirejs(['app/main']);