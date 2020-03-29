import {Router} from 'express';
export const routes = Router();

// TODO: upgrade 'router' with another implementation instad (Don't Repeat Yourself)
import {router as patients} from './endpoints/patients';
import {router as emails} from './endpoints/emails';

routes.use('/patients', patients);
routes.use('/emails', emails);
