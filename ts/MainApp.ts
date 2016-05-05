/// <reference path="../typings/tsd.d.ts" />
module Application {

var appModule = angular.module("MainApp", []);

appModule.controller(Application.Controllers.MainController.NAME,
    ["$scope", "database", ($scope, database) => new Application.Controllers.MainController($scope, database)]);

appModule.service("database", () => {
    return new Application.Services.Database();
});

// TODO
// appModule.directive("myDirective", ()
//     => new Application.Directives.MyDirective());
}
