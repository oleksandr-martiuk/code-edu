import Repository from "../../app-data-layer/repository";
import {ErrorValidationError, ErrorNotFound, ErrorConflict} from '../lib/errors'

import SchemaValidatorService from '../lib/schema-validator-service';
const validator = new SchemaValidatorService();
import * as schemaUpdate from '../../json-schema/user-tasks/update.json';

export default class UserTasks {
    constructor(dbConnection){
        this.userTasksRepo = new Repository(dbConnection, 'users_tasks');
        this.usersRepo = new Repository(dbConnection, 'users');
        this.tasksRepo = new Repository(dbConnection, 'tasks');
    }

    static validateUpdating (userTaskData) {
        if (!validator.isValid(schemaUpdate, userTaskData)) {
            throw new ErrorValidationError(undefined, validator.getFormattedErrors());
        }

        return true;
    }

    async createOne({userId, taskId}) {
        await Promise.all([
            this.checkUserTaskExistance({userId, taskId}),
            this.isRecordExists({userId, taskId})
        ]);

        const maxOrder = await this.getTaskCount(userId);
        const nextOrder = (maxOrder.max) ? ++maxOrder.max : 1

        const preparedRecord = {
            user_id: userId,
            task_id: taskId,
            task_order: nextOrder
        }
        await this.userTasksRepo.add(preparedRecord);
    }

    async checkUserTaskExistence({userId, taskId}) {
        const [userExist, taskExist] = await Promise.all([
            this.usersRepo.exists({id: userId}),
            this.tasksRepo.exists({id: taskId})
        ]);

        if (!userExist) {
            throw new ErrorNotFound(`Such user does not exist`);
        }
        if (!taskExist) {
            throw new ErrorNotFound(`Such task does not exist`);
        }
    }

    async isRecordExists({userId, taskId}) {
        const recordExist = await this.userTasksRepo.exists({user_id: userId, task_id: taskId});
        if (recordExist) {
            throw new ErrorConflict(`Such record already exists`);
        }
    }

    async getTaskCount(userId) {
        return await this.userTasksRepo.queryBuilder()
            .max('task_order')
            .where({'user_id': userId})
            .first();
    }

    async getAll(userId) {
        return await this.userTasksRepo.queryBuilder()
            .select(['ut.*', 't.title', 't.description'])
            .from('users_tasks AS ut')
            .join('tasks AS t', 'ut.task_id', 't.id')
            .where({'user_id': userId})
            .orderBy('ut.task_order');
    }

    async delete(id) {
        const recordExist = await this.userTasksRepo.exists();
        if (!recordExist) {
            
        }

        await this.userTasksRepo.delete()
    }
}
