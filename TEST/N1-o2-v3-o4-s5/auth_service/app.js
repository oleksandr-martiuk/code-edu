// |~~~~~~~~~~~~~~~~~~~~~~~~~~~~| (!) OBLIGATION |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
// TODO: add Unit tests
// TODO: create Docker image

// |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| OPTIONAL |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
// TODO: add Integrational tests
// TODO: add clusters
// TODO: add 'logger'
// TODO: add 'Cache'-service
// TODO: add nodemon
// TODO: add 'TRANSACTIONS'

// |~~~~~~~~~~~~~~~~~~~~~~~~~~~~| BUSINESS LOGIC |~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
// TODO: (users) check user_id ---> for each allowed request
// TODO: (tasks) ---> add field 'allowed_delete' if no one user uses such task
// TODO: (users_tasks) ---> add validation of user 'id' when trying to update some record
//                     ---> is it really you or not (by TOKEN)

import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import errorHandler from './middleware/error-handler';
const morgan = require('morgan'); // TODO: update such logger

const app = express();

dotenv.config();
const {APP_PORT} = process.env;

app.use(morgan('tiny'));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({
  extended: false,
  limit: '100mb'
}));
app.use(cors());

app.use('/auth', auth);

app.use(errorHandler);

app.listen(APP_PORT + '', () => console.log(`Auth service is listening on port ${APP_PORT}`));
