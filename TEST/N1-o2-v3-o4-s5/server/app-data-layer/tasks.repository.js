import Repository from "./repository";

export default class TasksRepository extends Repository {
    constructor(connection) {
        super(connection, 'tasks');
    }    
}
