///<reference path='../../typings/tsd.d.ts'/>

/**
 * YUIDoc_comment
 *
 * @class Task
 * @constructor
 **/
class Task {

    public static CLASS_NAME:string = 'Task';

    /**
     * TODO
     * if BACKEND_AVAILABLE: get data from endpoint
     * if not, then IS THERE DATA in LOCAL STORAGE: get data from there
     * else: TEST DEMO DATA
     * @returns {Task[]}
     * @constructor
     */
    public static GetAllTasks(): Task[] {
        var tasks: Task[] = [];
        var task1: Task = new Task(1,"My first task", "Fill in this site with my tasks", new Date().getTime());
        var task2: Task = new Task(2,"My second task", "Do the tasks", new Date().getTime());
        tasks.push(task1);
        tasks.push(task2);
        return tasks;
    };

    private title: string;
    private description: string;
    private lastmodified: number;

    constructor(id: number, title:string, description: string, lastmodified: number) {
        console.log("creating new task", title);
        this.title = title;
        this.description = description;
        this.lastmodified= lastmodified;
    }

}