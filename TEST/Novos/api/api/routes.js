import {Router} from 'express';
export const routes = Router();

import {router as patients} from './endpoints/patients';
import {router as emails} from './endpoints/emails';

routes.use('/patients', patients);
routes.use('/emails', emails);
