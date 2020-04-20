// TODO: bring DB options to the environment variables

import knex from 'knex';

export default class DB {
    initGateway = async (options) => {
        return knex({
            client: 'pg',
            connection: {
                host : '/var/run/postgresql',
                port: 5432,
                user : 'malex',
                password : '123',
                database : 'gamer'
            }
        });
    }
    destroyConnection = async() => {
        
    }
}
