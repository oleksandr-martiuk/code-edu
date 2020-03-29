// TODO: (improvement) such code could be rewrote to the TypeScript
// TODO: (improvement) add logger (for error logging for example)

// TODO: (!) add ERRORS handling

// TODO: (!) SECURE such application

import express from 'express';
import * as routes from './api/routes';
// const { routes } = require('./api/routes');

const dbConnection = require('./db/connection');

const app = express();
const { PORT } = require('./config');

dbConnection.connect(app);

app.use('/api', routes);

// TODO: move to the 'roots'
require('./api/endpoints/patients.mjs')(app);
require('./api/endpoints/emails.mjs')(app);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
