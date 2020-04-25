import Repository from "../../app-data-layer/repository";
import {ErrorValidationError, ErrorConflict, ErrorNotFound} from '../lib/errors'

import SchemaValidatorService from '../lib/schema-validator-service';
const validator = new SchemaValidatorService();
import * as schemaCreate from '../../json-schema/tasks/create.json';

export default class Task {
    constructor(dbConnection){
        this.tasksRepo = new Repository(dbConnection, 'tasks');
        this.userTasksRepo = new Repository(dbConnection, 'users_tasks')
    }

    static validateCreating (taskData) {
        if (!validator.isValid(schemaCreate, taskData)) {
            throw new ErrorValidationError(undefined, validator.getFormattedErrors());
        }

        return true;
    }
    
    async create(fields) {
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

    async delete(id) {
        const [task, userTaskRec] = await Promise.all([
            this.tasksRepo.get(id),
            this.userTasksRepo.getBy({task_id: id}),
        ]);

        if (!task) {
            throw new ErrorNotFound(`Such task does not exist`);
        }
        if (userTaskRec) {
            throw new ErrorNotFound(`Such task can't be removed (currently it is in use)`);
        }

        await this.tasksRepo.delete(id);
    };
}
