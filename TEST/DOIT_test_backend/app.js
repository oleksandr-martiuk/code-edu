// TODO: (!) add ERRORS handling
// TODO: (!) add LOGGER of request/response
// TODO: (!) SECURE such application as much as it possible

import express from 'express';
import {routes} from './api/routes';
import {PORT} from './config'

const app = express();
const dbConnection = require('./db/connection');

dbConnection.connect(app);

app.use('/api', routes);

app.listen(PORT + '', () => console.log(`App is listening on port ${PORT}`));
