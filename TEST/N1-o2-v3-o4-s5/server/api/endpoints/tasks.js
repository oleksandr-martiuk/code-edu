import auth from '../../middleware/auth';
import {Router} from 'express';
import Task from '../../services/core/task';
export const router = Router();

router.post('/', auth, async (req, res, next) => {
    const dataLayer = new AppDataLayer();

    try {
        const dbConnection = await dataLayer.createConnection();
        const taskService = new Task(dbConnection);

        const {title, description} = req.body;
        console.log('req.body: ', req.body);

        const task = await taskService.createOne({title, description});

        console.log('TASK: ', task);

        res.status(201).send(task);
    } catch (error) {
        next(error);
    } finally {
        await dataLayer.destroyConnection();
    }
});

router.get('/', auth, async (req, res, next) => {
    const dataLayer = new AppDataLayer();

    try {
        const dbConnection = await dataLayer.createConnection();
        const taskService = new Task(dbConnection);

        res.status(200).send('NO RESPONSE');
    } catch (error) {
        next(error);
    } finally {
        await dataLayer.destroyConnection();
    }
});

router.get('/:id', auth, async (req, res, next) => {
    const dataLayer = new AppDataLayer();

    try {
        const dbConnection = await dataLayer.createConnection();
        const taskService = new Task(dbConnection);

        res.status(200).send('NO RESPONSE');
    } catch (error) {
        next(error);
    } finally {
        await dataLayer.destroyConnection();
    }
});

router.delete('/:id', auth, async (req, res, next) => {
    const dataLayer = new AppDataLayer();

    try {
        const dbConnection = await dataLayer.createConnection();
        const taskService = new Task(dbConnection);

        res.status(200).send('NO RESPONSE');
    } catch (error) {
        next(error);
    } finally {
        await dataLayer.destroyConnection();
    }
});
