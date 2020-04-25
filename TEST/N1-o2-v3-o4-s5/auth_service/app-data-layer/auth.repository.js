import Repository from "./repository";

export default class AuthRepository extends Repository {
    constructor(connection) {
        super(connection, 'users');
    }    
}
