const express = require('express');
const app = express();
const cors = require('cors');
const port = 5005;

const routes = require('./api/routes');
const errorHandler = require('./middleware/errorHandler');

app.use(cors());
app.use('/', routes);
app.use(errorHandler);

app.listen(port, () => console.log(`server is listening on port ${port}!`));
