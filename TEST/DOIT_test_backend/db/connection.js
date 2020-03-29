const mongoose = require('mongoose');
const { DB_URL } = require('../config');

export const connect = () => {
    const dbConfigs = {
        useUnifiedTopology: true,
        useNewUrlParser: true
    };

    mongoose.connect(DB_URL, dbConfigs, () => console.log(`Connected to the DataBase: ${DB_URL}`));
}
