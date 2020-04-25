import knex from 'knex';

export default class AppDataLayer {
    constructor(){
        this.connection = null;
    }

    createConnection = async () => {
        this.connection = knex({
            client: 'pg',
            connection: process.env.PG_CONNECTION_STRING,
            searchPath: ['knex', 'public'],
        });

        return this.connection;
    }

    destroyConnection = async() => {
        if (this.connection !== null) {
            await this.connection.destroy();
        }
    }
}
