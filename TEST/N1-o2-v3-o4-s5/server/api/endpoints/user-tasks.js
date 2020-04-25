import auth from '../../middleware/auth';
import {Router} from 'express';
import AppDataLayer from '../../services/lib/app-data-layer';
import UserTasks from '../../services/core/user-tasks';

export const router = Router();

router.post('/:userId/:taskId', auth, async (req, res, next) => {
    const dataLayer = new AppDataLayer();

    try {
        const {userId, taskId} = req.params;

        const dbConnection = await dataLayer.createConnection();
        const userTasksService = new UserTasks(dbConnection);

        await userTasksService.createOne({userId, taskId});

        res.status(201).send();
    } catch (error) {
        next(error);
    } finally {
        await dataLayer.destroyConnection();
    }
});

router.get('/:userId', auth, async (req, res, next) => {
    const dataLayer = new AppDataLayer();

    try {
        const {userId} = req.params;

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

router.put('/:userId/:taskId', auth, async (req, res, next) => {
    const dataLayer = new AppDataLayer();

    try {
        const dbConnection = await dataLayer.createConnection();
        const userTaskService = new UserTasks(dbConnection);

        res.status(200).send('NO RESPONSE');
    } catch (error) {
        next(error);
    } finally {
        await dataLayer.destroyConnection();
    }
});

router.delete('/:userId/:taskId', auth, async (req, res, next) => {
    const dataLayer = new AppDataLayer();

    try {
        const {userId, taskId} = req.params;

        const dbConnection = await dataLayer.createConnection();
        const userTasksService = new UserTasks(dbConnection);

        await userTasksService.deleteOne({userId, taskId});

        res.status(200).send('NO RESPONSE');
    } catch (error) {
        next(error);
    } finally {
        await dataLayer.destroyConnection();
    }
});
