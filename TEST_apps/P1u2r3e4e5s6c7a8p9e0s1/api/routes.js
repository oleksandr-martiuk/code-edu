import {Router} from 'express';
export const routes = Router();

import {router as numbers} from './endpoints/numbers';

routes.use('/numbers', numbers);
