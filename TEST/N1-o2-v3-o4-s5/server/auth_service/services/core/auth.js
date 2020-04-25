import bCrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Repository from "../../app-data-layer/repository";
import {ErrorConflict, ErrorUnauthorized, ErrorNotFound} from '../lib/errors';

export default class Auth {
    constructor(dbConnection){
        this.usersRepo = new Repository(dbConnection, 'users')
    }

    async register (login, password) {
        if (await this.usersRepo.exists({login})) {
            throw new ErrorConflict('User already exists');
        }

        const user = await this.createUser(login, password);

        return user;
    }

    async createUser (login, password) {
        const userFields = await this.prepareUserFields(login, password);
        await this.usersRepo.add(userFields);

        const user = await this.usersRepo.getColumns(['id', 'login'], {login});

        return user;
    }

    async prepareUserFields (login, password) {
        const salt = await bCrypt.genSalt(+process.env.ROUNDS);
        const hashedPass = await bCrypt.hash(password, salt);

        const userFields = {
            login,
            password: hashedPass
        }

        return userFields;
    }

    async login (login, password) {
        const user = await this.usersRepo.getBy({login});
        if (!user) {
            throw new ErrorNotFound(`User '${login}' doesn't exist`);
        }

        const passResult = await bCrypt.compare(password, user.password);
        if (!passResult) {
            throw new ErrorUnauthorized(`Password is not correct`);
        }

        const token = this.createToken(user);

        return token;
    }

    createToken (user) {
        const tokenPayload = {
            userId: user.id,
            login: user.login
        };
        const expirationTime = { expiresIn: process.env.EXPIRATION_TIME };
        const token = jwt.sign(tokenPayload, process.env.SECRET, expirationTime);

        return `Bearer ${token}`;
    }
}
