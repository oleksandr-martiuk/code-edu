import Repository from "./repository";

export default class TasksRepository extends Repository {
    constructor(connection) {
        super(connection, 'tasks');
    }

    async create(fields){
        const {title} = fields;

        await this.add(fields);
        const task = await this.getBy({title});

        return task;
    }
}
