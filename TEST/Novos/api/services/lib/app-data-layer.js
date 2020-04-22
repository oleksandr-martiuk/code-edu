// TODO: bring DB options to the environment variables

import knex from 'knex';

export default class AppDataLayer {
    constructor(){
        this.connection = null;
    }

    createConnection = async () => {
        this.connection = knex({
            client: process.env.DB_CLIENT,
            connection: {
                host : process.env.DB_HOST,
                port: process.env.DB_PORT,
                user : process.env.DB_USER,
                password : process.env.DB_PASS,
                database : process.env.DB_NAME
            }
        });
        return this.connection;
    }

    destroyConnection = async() => {
        if (this.connection !== null) {
            await this.connection.destroy();
        }
    }
}
