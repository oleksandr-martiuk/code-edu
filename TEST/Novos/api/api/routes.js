import {Router} from 'express';
export const routes = Router();

import {router as auth} from './endpoints/auth';
import {router as tasks} from './endpoints/tasks';
import {router as userTasks} from './endpoints/user-tasks';

routes.use('/auth', auth);
routes.use('/tasks', tasks);
routes.use('/user-tasks', userTasks);
