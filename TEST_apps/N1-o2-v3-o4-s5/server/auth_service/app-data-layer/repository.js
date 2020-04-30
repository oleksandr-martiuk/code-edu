"use strict";

export default class Repository {
    constructor(connection, tableBaseName) {
        this.connection = connection;
        this.tableName = tableBaseName;
    }

    add(fields) {
        return this.connection(this.tableName).insert(fields);
    }

    getAll(where = {}) {
        return this.connection(this.tableName)
            .select()
            .where(where);
    }

    async get(id) {
        return this.connection(this.tableName)
            .where({ id })
            .first();
    }

    getBy(where) {
        return this.connection(this.tableName)
            .where(where)
            .first();
    }

    getColumns(columns, where = {}) {
        return this.connection(this.tableName)
            .select(columns)
            .where(where)
            .first();
    }

    updateBy(fields, where) {
        return this.connection(this.tableName)
            .where(where)
            .update(fields);
    }

    delete(id) {
        return this.connection(this.tableName)
            .where({ id })
            .delete();
    }

    async exists(where) {
        const row = await this.connection(this.tableName)
            .where(where)
            .first();
        return !!row;
    }

    queryBuilder() {
        return this.connection(this.tableName);
    }
}
