// TODO: add 'errors handler'
// TODO: add 'logger'
// TODO: add JSON-validation

import express from 'express';
import bodyParser from 'body-parser';

import {routes} from './api/routes';
import {APP_PORT} from './config'

const app = express();

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({
  extended: false,
  limit: '100mb'
}));

app.use('/api', routes);

app.listen(APP_PORT + '', () => console.log(`App is listening on port ${APP_PORT}`));
