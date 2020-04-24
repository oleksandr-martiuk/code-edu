import { ErrorConflict, ErrorUnauthorized, ErrorNotFound } from '../lib/errors';
import bCrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class Auth {
    constructor(dbConnection){
        this.conn = dbConnection;
        this.usersTable = 'users';
    }

    async register ({login, password}) {
        const user = await this.findUser({login});
        if (user) {
            throw new ErrorConflict('User already exists');
        }

        const userRes = await this.createUser({login, password});

        return userRes;
    }

    async createUser ({login, password}) {
        const salt = await bCrypt.genSalt(+process.env.ROUNDS);
        const hashedPass = await bCrypt.hash(password, salt);

        const newUserFields = {
            login,
            password: hashedPass
        }

        await this.conn(this.usersTable).insert(newUserFields);
        const newUser = await this.findUser({login}, ['id', 'login']);

        return newUser;
    }

    async login ({login, password}) {
        const user = await this.findUser({login});
        if (!user) {
            throw new ErrorNotFound(`User '${login}' doesn't exist`);
        }

        const passResult = await bCrypt.compare(password, user.password);
        if (!passResult) {
            throw new ErrorUnauthorized(`Password is not correct`);
        }

        const tokenPayload = {
            userId: user.id,
            login: user.login
        };
        const expirationTime = { expiresIn: process.env.EXPIRATION_TIME };
        const token = jwt.sign(tokenPayload, process.env.SECRET, expirationTime);

        return `Bearer ${token}`;
    }

    async findUser (whereFields = {}, selectFields = []) {
        return await this.conn(this.usersTable)
            .select(selectFields)
            .where(whereFields)
            .first();
    }
}
