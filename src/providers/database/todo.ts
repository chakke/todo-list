

export class Todo {
    id: number;
    title: string;
    description: string;
    time_created: Date;
    deadline: Date;
    isDone: boolean;

    constructor() {
        this.id = -1;
        this.title = "Todo Item";
        this.description = "This is todo description";
        this.time_created = new Date();
        this.deadline = new Date();
        this.isDone = false;
    }
}