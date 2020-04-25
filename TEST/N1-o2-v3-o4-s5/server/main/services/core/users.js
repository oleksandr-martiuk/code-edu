import axios from 'axios';
import {ErrorValidationError} from '../lib/errors';

import SchemaValidatorService from '../lib/schema-validator-service';
const validator = new SchemaValidatorService();
import * as userSchema from '../../json-schema/user.json';

export default class Users {
    static validateUserFields(data) {
        if (!validator.isValid(userSchema, data)) {
            throw new ErrorValidationError(undefined, validator.getFormattedErrors());
        }

        return true;
    }

    async register(login, password) {
        const url = process.env.AUTH_URI + '/register';
        const data = JSON.stringify({ login, password});
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
