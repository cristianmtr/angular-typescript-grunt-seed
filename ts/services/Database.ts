///<reference path='../../typings/tsd.d.ts'/>

module Application.Services {

    export class Database {

        public static NAME: string = "database";

        constructor() {
            console.log("Database");
        }

        public testVar: number = 232;
    }
}
