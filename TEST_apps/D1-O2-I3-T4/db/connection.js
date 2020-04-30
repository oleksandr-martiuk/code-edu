import mongoose from 'mongoose';
import { DB_URL, DB_PORT } from '../config';

export default class DB {
    connect = () => {
        const dbConfigs = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        };

        mongoose.connect(DB_URL, dbConfigs, () => console.log(`DataBase connected to the port ${DB_PORT}`));
    }

    close = () => {
        mongoose.connection.close(() => 'DB is closed');
    }
}
