module Application.Services {

    export class Database {

        // DI WITH ANGULAR
         static $inject = ["$rootScope"];

        public static NAME: string = "database";

        constructor($rootScope) {
            console.log("Database");
            $rootScope.$broadcast('eventFired', {
                    data: "DATABASE LOADED"
                })
        }

        public testVar: number = 232;
    }
}
