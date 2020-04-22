import bCrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class Auth {
    constructor(connection){
        this.usersTable = connection('users');
    }
    login = async ({login, password}) => {
        const user = await this.usersTable
            .select()
            .where({password, login})
            .first();

        if (!user.login && !user.password) {
            return {};
        }

        console.log(password, '===', user.password);
        const isValid = bCrypt.compareSync(password, user.password);
        return isValid;

        // return user;
    }
}
