import express from 'express';
const app = express();

import dotenv from 'dotenv';
import findConfig from 'find-config';
dotenv.config({ path: findConfig('.env') });
const {APP_PORT_AUTH} = process.env;

import bodyParser from 'body-parser';
import cors from 'cors';
import {router as auth} from './api/auth';
import errorHandler from './middleware/error-handler';

const morgan = require('morgan'); // TODO: update such logger

app.use(morgan('tiny'));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({
  extended: false,
  limit: '100mb'
}));
app.use(cors());

app.use('/auth', auth);

app.use(errorHandler);

app.listen(APP_PORT_AUTH + '', () => console.log(`Auth service is listening on port ${APP_PORT_AUTH}`));
