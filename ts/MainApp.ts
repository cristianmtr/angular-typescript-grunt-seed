/// <reference path="../typings/tsd.d.ts" />

module Application {

    var appModule = angular.module("MainApp", []);

// THIS WAY YOU DON'T NEED TO SPECIFY DEPENDENCIES AND CAN USE static $inject = [<dependendecies>] IN YOUR CLASSES
    appModule.controller(Application.Controllers.MainController.NAME, Application.Controllers.MainController);

    appModule.service("database", Application.Services.Database);

// TODO
// appModule.directive("myDirective", ()
//     => new Application.Directives.MyDirective());
}
