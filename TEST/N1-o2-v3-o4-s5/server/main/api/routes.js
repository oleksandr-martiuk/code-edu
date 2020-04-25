import {Router} from 'express';
import {ErrorNotFound} from '../services/lib/errors';

export const routes = Router();

import {router as auth} from './endpoints/auth';
import {router as tasks} from './endpoints/tasks';
import {router as userTasks} from './endpoints/user-tasks';

routes.use('/auth', auth);
routes.use('/tasks', tasks);
routes.use('/user-tasks', userTasks);

routes.use(function(req, res, next) {
    if (!req.route)
        return next (new ErrorNotFound());

    next();
});
