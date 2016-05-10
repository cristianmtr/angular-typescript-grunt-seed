# ANGULAR - TYPESCRIPT - BOOTSTRAP SEED

Seed for angular + bootstrap + typescript projects;

## tools:

grunt: 
open, watch, ts compile

tsd: 
install typings

## ts + angular gotchas

### dep. injection done right:

Make sure to only construct classes (ctrls. and servs.) using this syntax:

```
    appModule.controller(Application.Controllers.MainController.NAME, Application.Controllers.MainController);
    appModule.service("database", Application.Services.Database);

```

This way you don't clutter the file with dependencies that may change over time.
And then you can use `static $inject`, like so:

```
        static $inject = ["$scope", "database"];
        private saveTaskIntevalId:number;

        constructor($scope:IMainControllerScope,
            database:Application.Services.Database) {

            this.scope = $scope;
            this.database = database;
```

### references file

Only have one references file, managed by **tsd**. This should contain your `includes`, in order of loading (from first required to last required, general -> specific)

```
/// <reference path="jquery/jquery.d.ts" />
/// <reference path="angularjs/angular.d.ts" />
/// <reference path="moment/moment.d.ts" />
/// <reference path="bootstrap/bootstrap.d.ts" />
/// <reference path="../ts/services/Database.ts" />
/// <reference path="../ts/controllers/MainController.ts" />
/// <reference path="../ts/models/Task.ts" />
```

And then you only reference that file in your `main.ts` file, like so:

```
/// <reference path="../typings/tsd.d.ts" />

module Application {

    var appModule = angular.module("MainApp", []);
    
    ...
```

### this keyword

You'll have problems using `this` if declaring methods with `function` keyword. Use this syntax instead:
```
            this.scope.taskComplete = (arg: string): boolean => {
                this.scope.selectedTask.done = true;
                ...
                }
```

