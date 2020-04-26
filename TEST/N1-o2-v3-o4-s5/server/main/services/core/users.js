import axios from 'axios';
import {ErrorValidationError} from '../lib/errors';

import SchemaValidatorService from '../lib/schema-validator-service';
const validator = new SchemaValidatorService();
import * as registerUserSchema from '../../json-schema/user/register.json';
import * as loginUserSchema from '../../json-schema/user/login.json';

export default class Users {
    static validateRegisterUserFields(data) {
        if (!validator.isValid(registerUserSchema, data))
            throw new ErrorValidationError(undefined, validator.getFormattedErrors());

        return true;
    }

    static validateLoginUserFields(data) {
        if (!validator.isValid(loginUserSchema, data))
            throw new ErrorValidationError(undefined, validator.getFormattedErrors());

        return true;
    }

    async register(login, password, email) {
        const url = process.env.AUTH_URI + '/register';
        const data = JSON.stringify({ login, password, email});
        const headers = { 'Content-Type': 'application/json' }

        const result = await axios.post(url, data, {headers});

        return result.data;
    }

    async login(login, password) {
        const url = process.env.AUTH_URI + '/login';
        const data = JSON.stringify({ login, password});
        const headers = { 'Content-Type': 'application/json' }

        const result = await axios.post(url, data, {headers});

        return result.data;
    }
}
