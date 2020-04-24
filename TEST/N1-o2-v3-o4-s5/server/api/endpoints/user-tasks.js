import auth from '../../middleware/auth';
import {Router} from 'express';
import UserTask from '../../services/core/user-tasks';
export const router = Router();

router.get('/:userId', auth, async (req, res, next) => {
    const dataLayer = new AppDataLayer();

    try {
        const dbConnection = await dataLayer.createConnection();
        const userTaskService = new UserTask(dbConnection);

        res.status(200).send('NO RESPONSE');
    } catch (error) {
        next(error);
    } finally {
        await dataLayer.destroyConnection();
    }
});

router.post('/', auth, async (req, res, next) => {
    const dataLayer = new AppDataLayer();

    try {
        const dbConnection = await dataLayer.createConnection();
        const userTaskService = new UserTask(dbConnection);

        res.status(201).send('NO RESPONSE');
    } catch (error) {
        next(error);
    } finally {
        await dataLayer.destroyConnection();
    }
});

router.put('/', auth, async (req, res, next) => {
    const dataLayer = new AppDataLayer();

    try {
        const dbConnection = await dataLayer.createConnection();
        const userTaskService = new UserTask(dbConnection);

        res.status(200).send('NO RESPONSE');
    } catch (error) {
        next(error);
    } finally {
        await dataLayer.destroyConnection();
    }
});

router.delete('/', auth, async (req, res, next) => {
    const dataLayer = new AppDataLayer();

    try {
        const dbConnection = await dataLayer.createConnection();
        const userTaskService = new UserTask(dbConnection);

        res.status(200).send('NO RESPONSE');
    } catch (error) {
        next(error);
    } finally {
        await dataLayer.destroyConnection();
    }
});
