var finalassignment;
(function (finalassignment) {
    'use strict';
    var mainCtrl = (function () {
        function mainCtrl($scope) {
            this.$scope = $scope;
            $scope.testVar = "X";
        }
        return mainCtrl;
    }());
    finalassignment.mainCtrl = mainCtrl;
})(finalassignment || (finalassignment = {}));
var finalassignment;
(function (finalassignment_1) {
    'use strict';
    var finalassignment = angular.module('finalassignment', [])
        .controller("mainCtrl", finalassignment_1.mainCtrl);
})(finalassignment || (finalassignment = {}));
//# sourceMappingURL=out.js.map