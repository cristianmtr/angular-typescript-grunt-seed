/// <reference path="../typings/tsd.d.ts" />

var appModule = angular.module("MainApp", []);

appModule.controller(Application.Controllers.MainController.name, ["$scope", ($scope) => new Application.Controllers.MainController($scope)]);

// TODO
// appModule.factory("MyService", ["$http", "$location", ($http, $location)
//     => new Application.Services.MyService($http, $scope)]);
//
// appModule.directive("myDirective", ()
//     => new Application.Directives.MyDirective());
