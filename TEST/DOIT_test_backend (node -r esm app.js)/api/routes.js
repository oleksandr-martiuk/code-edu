import express from 'express';
export const routes = express.Router();

console.log('YO');
import * as patients from './endpoints/patients';
import * as emails from './endpoints/emails';

routes.use('/patients', patients);
routes.use('/emails', emails);
