// (!) OBLIGATION:
// TODO: add 'errors handler'
// TODO: add 'logger'
// TODO: add JSON-validation
// TODO: add clusters
// TODO: add iq-data-layer 'knex' requests

// (~) OPTIONAL:
// TODO: 
// TODO: 
// TODO: 

import express from 'express';
const app = express();

import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import {routes} from './api/routes';

dotenv.config();
const {APP_PORT} = process.env;
const morgan = require('morgan');
app.use(morgan('tiny'));

app.use(cors());
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({
  extended: false,
  limit: '100mb'
}));

app.use('/api', routes);

app.listen(APP_PORT + '', () => console.log(`App is listening on port ${APP_PORT}`));
