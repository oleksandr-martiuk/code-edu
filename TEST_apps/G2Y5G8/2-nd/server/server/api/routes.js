const { Router } = require('express');
const routes = Router();

const tours = require('./endpoints/tours')

routes.use('/', tours);

module.exports = routes;
