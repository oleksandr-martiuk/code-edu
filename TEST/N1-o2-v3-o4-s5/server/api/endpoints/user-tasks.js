import auth from '../../middleware/auth';
import {Router} from 'express';
import AppDataLayer from '../../services/lib/app-data-layer';
import UserTasks from '../../services/core/user-tasks';

export const router = Router();

router.post('/:taskId', auth, async (req, res, next) => {
    const dataLayer = new AppDataLayer();

    try {
        const {taskId} = req.params;
        const {userId} = req.locals;

        const dbConnection = await dataLayer.createConnection();
        const userTasksService = new UserTasks(dbConnection);

        const userTaskRecord = await userTasksService.create(userId, taskId);

        res.status(201).send(userTaskRecord);
    } catch (error) {
        next(error);
    } finally {
        await dataLayer.destroyConnection();
    }
});

router.get('/', auth, async (req, res, next) => {
    const dataLayer = new AppDataLayer();

    try {
        const {userId} = req.locals;

        const dbConnection = await dataLayer.createConnection();
        const userTasksService = new UserTasks(dbConnection);

        const userTasks = await userTasksService.getAll(userId);

        res.status(200).send(userTasks);
    } catch (error) {
        next(error);
    } finally {
        await dataLayer.destroyConnection();
    }
});

router.put('/:id', auth, async (req, res, next) => {
    const dataLayer = new AppDataLayer();

    try {
        UserTasks.validateUpdating(req.body);
        const {id} = req.params;
        const {userId} = req.locals;

        const dbConnection = await dataLayer.createConnection();
        const userTasksService = new UserTasks(dbConnection);

        await userTasksService.update(userId, id, req.body);

        res.status(204).send();
    } catch (error) {
        next(error);
    } finally {
        await dataLayer.destroyConnection();
    }
});

router.delete('/:id', auth, async (req, res, next) => {
    const dataLayer = new AppDataLayer();

    try {
        const {id} = req.params;
        const {userId} = req.locals;

        const dbConnection = await dataLayer.createConnection();
        const userTasksService = new UserTasks(dbConnection);

        await userTasksService.delete(userId, id);

        res.status(200).send();
    } catch (error) {
        next(error);
    } finally {
        await dataLayer.destroyConnection();
    }
});
