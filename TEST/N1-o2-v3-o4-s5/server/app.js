// |~~~~~~~~| (!) OBLIGATION |~~~~~~~~|:
// TODO: add 'errors handler'
// TODO: add JSON-validation
// TODO: add 'TRANSACTIONS'
// TODO: 
// TODO: 

// |~~~~~~~~~~~| OPTIONAL |~~~~~~~~~~~|:
// TODO: add clusters
// TODO: add 'logger'
// TODO: add app-data-layer 'knex' requests
// TODO: add 'Cache'-service
// TODO: add nodemon
// TODO: 
// TODO: 

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
