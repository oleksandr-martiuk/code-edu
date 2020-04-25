"use strict";

// TODO: remove not used methods

import {ErrorNotFound} from '../services/lib/errors'; // TODO: remove such error if not needed

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
            .where(where);
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

    // transaction() {
    //     return new Promise(resolve => {
    //         this.connection.transaction((trx) => resolve(trx));
    //     });
    // }

    // queryBuilder() {
    //     return this.connection(this.tableName);
    // }

    // update(fields) {
    //     return this.connection(this.tableName).update(fields);
    // }

    // deleteBy(where) {
    //     return this.connection(this.tableName)
    //         .where(where)
    //         .delete();
    // }

    // async existsCaseSensitive(where) {
    //     const whereValues = Object.values(where);
    //     const whereConditions = Object.keys(where)
    //         .map(key => `${key} = ? COLLATE utf8mb4_bin`)
    //         .join(' AND ');
    //     const row = await this.connection(this.tableName)
    //         .whereRaw(whereConditions, whereValues)
    //         .first();
    //     return !!row;
    // }

    // drop() {
    //     return this.connection.schema.dropTable(this.tableName);
    // }

    // dropIfExists() {
    //     return this.connection.schema.dropTableIfExists(this.tableName);
    // }

    // distinct(columns) {
    //     return this.connection(this.tableName).distinct(columns);
    // }

    // raw(query, bindings) {
    //     return bindings ? this.connection.raw(query, bindings) : this.connection.raw(query);
    // }

    // async tableExists(tableName) {
    //     tableName = tableName || this.tableName;
    //     const table = await this.connection('INFORMATION_SCHEMA.TABLES')
    //         .select('TABLE_NAME')
    //         .where({ TABLE_NAME: tableName })
    //         .first();
    //     return !!table;
    // }
}
