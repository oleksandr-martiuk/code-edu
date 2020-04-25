import Repository from "../../app-data-layer/repository";
import {ErrorValidationError, ErrorConflict, ErrorNotFound} from '../lib/errors'

import SchemaValidatorService from '../lib/schema-validator-service';
const validator = new SchemaValidatorService();
import * as schemaCreate from '../../json-schema/tasks/create.json';

export default class Task {
    constructor(dbConnection){
        this.tasksRepo = new Repository(dbConnection, 'tasks')
    }

    static validateCreating (taskData) {
        if (!validator.isValid(schemaCreate, taskData)) {
            throw new ErrorValidationError(undefined, validator.getFormattedErrors());
        }

        return true;
    }
    
    async createOne(fields) {
        const {title} = fields;
        if (await this.tasksRepo.exists({title})) {
            throw new ErrorConflict('Such task already exists');
        }

        await this.tasksRepo.add(fields);
        const task = await this.tasksRepo.getBy({title});

        return task;
    };

    async readAll() {
        return await this.tasksRepo.getAll();
    }

    async deleteOne(id) {
        const task = await this.tasksRepo.get(id);
        if (!task) {
            throw new ErrorNotFound(`Such task does not exist`);
        }

        await this.tasksRepo.delete(id);
    };
}
