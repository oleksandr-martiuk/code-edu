import mongoose from 'mongoose';
import { DB_URL, DB_PORT } from '../config';

export default (() => {
    const dbConfigs = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    };

    mongoose.connect(DB_URL, dbConfigs, () => console.log(`DataBase connected on port ${DB_PORT}`));
})
