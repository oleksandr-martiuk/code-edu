// |~~~~~~~~| (!) OBLIGATION |~~~~~~~~|:
// TODO: add 'errors handler'
// TODO: add JSON-validation
// TODO: 
// TODO: 
// TODO: 

// |~~~~~~~~~~~| OPTIONAL |~~~~~~~~~~~|:
// TODO: add clusters
// TODO: add 'logger'
// TODO: add app-data-layer 'knex' requests
// TODO: add 'Cache'-service
// TODO: 
// TODO: 
// TODO: 

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import {routes} from './api/routes';
const morgan = require('morgan'); // TODO: update such logger

const app = express();
const {APP_PORT} = process.env;

dotenv.config();
app.use(morgan('tiny'));

app.use(cors());
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({
  extended: false,
  limit: '100mb'
}));

app.use('/api', routes);

app.listen(APP_PORT + '', () => console.log(`App is listening on port ${APP_PORT}`));
