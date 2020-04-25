import Repository from "./repository";

export default class UsersTasksRepository extends Repository {
    constructor(connection) {
        super(connection, 'users_tasks');
    }

    async create(fields) {
        await this.add(fields);
        const userTaskRecord = await this.getBy(fields)

        return userTaskRecord;
    }

    async getTaskCount(userId) {
        return await this.queryBuilder()
            .max('task_order')
            .where({'user_id': userId})
            .first();
    }

    async getAllByUser(userId) {
        return await this.queryBuilder()
            .select(['ut.*', 't.title', 't.description'])
            .from('users_tasks AS ut')
            .join('tasks AS t', 'ut.task_id', 't.id')
            .where({'user_id': userId})
            .orderBy('ut.task_order');
    }
}
