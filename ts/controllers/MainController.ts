module Application.Controllers {

    export class MainController {

        scope: any;
        public static name: string = "MainController";

        constructor($scope: ng.IScope) {
            this.scope = $scope;
            this.scope.tasks = Task.GetAllTasks();
            this.scope.selectedTask = this.scope.tasks[0];
        }

    }
}