// import bCrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Repository from "../../app-data-layer/repository";
import {ErrorConflict, ErrorUnauthorized, ErrorNotFound} from '../lib/errors';

export default class Auth {
    constructor(dbConnection){
        this.usersRepo = new Repository(dbConnection, 'users')
    }

    async register (login, password, email) {
        if (await this.usersRepo.exists({login})) {
            throw new ErrorConflict('User already exists');
        }

        const userAuthData = await this.createUser(login, password, email);

        return userAuthData;
    }

    async createUser (login, password, email) {
        const userFields = await this.prepareUserFields(login, password, email);
        await this.usersRepo.add(userFields);

        const user = await this.usersRepo.getColumns(['id', 'login'], {login});
        const authData = {
            userId: user.id,
            token: this.createToken(user)
        };

        return authData;
    }

    async prepareUserFields (login, password, email) {
        // TODO: temporary SOLUTION related to vulnerabilities with 'bCrypt'
        // const salt = await bCrypt.genSalt(+process.env.ROUNDS);
        // const hashedPass = await bCrypt.hash(password, salt);
        const hashedPass = '';

        const userFields = {
            login,
            email,
            password: hashedPass
        }

        return userFields;
    }

    async login (login, password) {
        const user = await this.usersRepo.getBy({login});
        if (!user) {
            throw new ErrorNotFound(`User '${login}' doesn't exist`);
        }

        // TODO: temporary SOLUTION related to vulnerabilities with 'bCrypt'
        // const passResult = await bCrypt.compare(password, user.password);
        const passResult = true;

        if (!passResult) {
            throw new ErrorUnauthorized(`Password is not correct`);
        }

        const authData = {
            userId: user.id,
            token: this.createToken(user)
        };

        return authData;
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
