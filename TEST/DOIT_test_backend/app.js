import express from 'express';
import DB from './db/connection';
import bodyParser from 'body-parser';
import {routes} from './api/routes';
import {APP_PORT} from './config'

const app = express();

const db = new DB();
db.connect();

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({
  extended: false,
  limit: '100mb'
}));

app.use('/api', routes);

app.listen(APP_PORT + '', () => console.log(`App is listening on port ${APP_PORT}`));
