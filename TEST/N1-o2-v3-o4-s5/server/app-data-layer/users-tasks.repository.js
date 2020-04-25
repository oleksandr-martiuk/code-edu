import Repository from "./repository";

export default class UsersTasksRepository extends Repository {
    constructor(connection) {
        super(connection, 'users_tasks');
    }    
}
