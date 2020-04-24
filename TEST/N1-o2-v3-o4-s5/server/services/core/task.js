export default class Task {
    constructor(dbConnection){
        this.conn = dbConnection;
        this.tasksTable = 'tasks';
    }

    async createOne(fields) {
        const task = await this.conn(this.tasksTable).insert(fields);
        return task;
    };
}
