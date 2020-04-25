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
const app = express();

import dotenv from 'dotenv';
dotenv.config();
const {APP_PORT} = process.env;

import bodyParser from 'body-parser';
import cors from 'cors';
import {routes} from './api/routes';
import errorHandler from './middleware/error-handler';

const morgan = require('morgan'); // TODO: update such logger
app.use(morgan('tiny'));

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({
  extended: false,
  limit: '100mb'
}));
app.use(cors());

app.use('/api', routes);
app.use(errorHandler);

app.listen(APP_PORT + '', () => console.log(`App is listening on port ${APP_PORT}`));
