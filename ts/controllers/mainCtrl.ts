module finalassignment {
    'use strict';

    export class mainCtrl {
        constructor(private $scope) {
            $scope.testVar = "X";
            $scope.otherVar = 222;
            $scope.testFunc = function () {
                $scope.otherVar ++;
                console.log($scope.otherVar);
            }
        }
    }
}