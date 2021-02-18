import UsersTasksRepository from "../../app-data-layer/user-tasks.repository";
import UsersRepository from "../../app-data-layer/users.repository";
import TasksRepository from "../../app-data-layer/tasks.repository";
import {ErrorValidationError, ErrorNotFound, ErrorConflict} from '../lib/errors'

import SchemaValidatorService from '../lib/schema-validator-service';
const validator = new SchemaValidatorService();
import * as schemaUpdate from '../../json-schema/user-tasks/update.json';

export default class UserTasks {
    constructor(dbConnection){
        this.userTasksRepo = new UsersTasksRepository(dbConnection)
        this.usersRepo = new UsersRepository(dbConnection);
        this.tasksRepo = new TasksRepository(dbConnection);
    }

    static validateUpdating (userTaskData) {
        if (!validator.isValid(schemaUpdate, userTaskData)) {
            throw new ErrorValidationError(undefined, validator.getFormattedErrors());
        }

        return true;
    }

    async create(userId, taskId) {
        await this.checkEntitiesExistence(userId, taskId);

        const maxOrder = await this.userTasksRepo.getTaskCount(userId);
        const nextOrder = (maxOrder.max) ? ++maxOrder.max : 1

        const preparedRecord = {
            user_id: userId,
            task_id: taskId,
            task_order: nextOrder
        }

        const record =await this.userTasksRepo.create(preparedRecord);

        return record;
    }

    async checkEntitiesExistence(userId, taskId) {
        const [userExist, taskExist, recordExist] = await Promise.all([
            this.usersRepo.exists({id: userId}),
            this.tasksRepo.exists({id: taskId}),
            this.userTasksRepo.exists({user_id: userId, task_id: taskId})
        ]);

        if (!userExist) {
            throw new ErrorNotFound(`Such user does not exist`);
        }
        if (!taskExist) {
            throw new ErrorNotFound(`Such task does not exist`);
        }
        if (recordExist) {
            throw new ErrorConflict(`Such record already exists`);
        }
    }

    async getAll(userId) {
        return await this.userTasksRepo.getAllByUser(userId);
    }

    async update(userId, id, updateFields = {}) {
        await this.isUserRecord({id, user_id: userId});
        await this.userTasksRepo.updateBy(updateFields, {id})
    }

    async delete(userId, id) {
        await this.isUserRecord({id, user_id: userId});
        await this.userTasksRepo.delete(id)
    }

    async isUserRecord(whereCond){
        const recordExist = await this.userTasksRepo.exists(whereCond)
        if (!recordExist) {
            throw new ErrorNotFound(`You don't have permission for changing such record`);
        }
    }
}
