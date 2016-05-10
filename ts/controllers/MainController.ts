module Application.Controllers {

    export class MainController {

        scope:any;
        public static NAME:string = "MainController";
        
        // DI WITH ANGULAR
        static $inject = ["$scope", "database"];

        constructor($scope:ng.IScope, database: Application.Services.Database) {
            console.log(database.testVar);
            this.scope = $scope;
            this.scope.tasks = Task.GetAllTasks();
            this.scope.selectedTask = this.scope.tasks[0];
            this.scope.focusTask = function (taskName) {
                console.log(taskName, "is now the focus");

            }
        }

    }
}
