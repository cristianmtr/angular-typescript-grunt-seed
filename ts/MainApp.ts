/// <reference path="../typings/tsd.d.ts" />
// module Application {

var appModule = angular.module("MainApp", []);

appModule.controller(Application.Controllers.MainController.name, ["$scope", ($scope) => new Application.Controllers.MainController($scope)]);

// appModule.factory(Application.Services.BackendService.NAME, ["$http", "$location", ($http, $location) => new Application.Services.BackendService()]);

// TODO
// appModule.directive("myDirective", ()
//     => new Application.Directives.MyDirective());
// }
