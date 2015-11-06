var both = ['client', 'server'];
var client = 'client';
var server = 'server';

Package.describe({
    name: "mys:angular-formly-templates-material",
    summary: "Material design templates for angular-formly",
    version: "0.0.1",

    documentation: 'README.md',
    git: 'https://github.com/kamilkisiela/meteor-angular-formly-templates-material.git'
});

Package.onUse(function (api) {

    var packages = [
        'standard-minifiers',
        'es5-shim',
        'ecmascript',
        'angular@1.0.0',
        'angular:angular@1.4.7',
        'angular:angular-messages@1.4.7',
        'angular:angular-material@0.11.4',
        'pbastowski:angular2-now@0.3.13',
        'pbastowski:ecmascript-extras'
    ];

    api.versionsFrom("METEOR@1.0");

    api.use(packages);

    api.imply(packages);

    api.addFiles([
        'lib/client/main.js',

        //
        // wrappers
        //

        // input-container
        'lib/client/wrappers/input-container/input-container.js',
        'lib/client/wrappers/input-container/input-container.ng.html',
        // label
        'lib/client/wrappers/label/label.js',
        'lib/client/wrappers/label/label.ng.html',
        // messages
        'lib/client/wrappers/messages/messages.js',
        'lib/client/wrappers/messages/messages.ng.html',

        //
        // types
        //

        // input
        'lib/client/types/input/input.js',
        'lib/client/types/input/input.ng.html'

    ], client);

});