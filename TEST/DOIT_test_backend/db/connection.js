import mongoose from 'mongoose';
import { DB_URL, DB_PORT } from '../config';

export default class DB {
    connect = async () => {
        const dbConfigs = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        };

        console.log('START DB connection');
        await mongoose.connect(DB_URL, dbConfigs, () => console.log(`DataBase connected on port ${DB_PORT}`));
    }
    close = async () => {
        console.log('CLOSE DB connection');
        await mongoose.connection.close(() => 'DB is closed!');
    }
}
