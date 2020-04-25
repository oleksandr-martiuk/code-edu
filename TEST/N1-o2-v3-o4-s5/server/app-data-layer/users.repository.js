import Repository from "./repository";

export default class UsersRepository extends Repository {
    constructor(connection) {
        super(connection, 'users');
    }    
}
