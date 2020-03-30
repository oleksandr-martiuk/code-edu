// TODO: (!) add ERRORS handling
// TODO: (!) add LOGGER of request/response
// TODO: (!) SECURE such application as much as it possible
// TODO: improve each file by predefined TODO list
// TODO: (~) improve response from res.send ---> just sending message (all other things should be done by Wrapper)

import express from 'express';
import bodyParser from 'body-parser';

import {routes} from './api/routes';
import dbConnection from './db/connection';
import {APP_PORT} from './config'

const app = express();

dbConnection(app);

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({
  extended: false,
  limit: '100mb'
}));

app.use('/api', routes);

app.listen(APP_PORT + '', () => console.log(`App is listening on port ${APP_PORT}`));
