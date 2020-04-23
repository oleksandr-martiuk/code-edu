import bCrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class Auth {
    constructor(connection){
        this.tableUsers = connection('users');
    }

    login = async ({login, password}) => {
        const user = await this.tableUsers
            .select()
            .where({login})
            .first();

        if (!user.login && !user.password) {
            
            return {};
        }

        console.log(password, '===', user.password);
        const isValid = bCrypt.compare(password, user.password);
        if (!isVlalid) {
            return null;
        }

        const token = jwt.sign(user.id, process.env.SECRET);
        console.log('token: ', token)
 
        return token;
    }

    register = async (fields) => {
        const user = await this.tableUsers.insert(fields);
        return user;
    }
}
