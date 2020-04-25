import auth from '../../middleware/auth';
import {Router} from 'express';
import AppDataLayer from '../../services/lib/app-data-layer';
import Task from '../../services/core/task';
export const router = Router();

router.post('/', auth, async (req, res, next) => {
    const dataLayer = new AppDataLayer();

    try {
        Task.validateCreating(req.body);

        const dbConnection = await dataLayer.createConnection();
        const taskService = new Task(dbConnection);

        const {title, description} = req.body;
        const task = await taskService.createOne({title, description});

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

        const tasks = await taskService.readAll();

        res.status(200).send(tasks);
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

        const dbConnection = await dataLayer.createConnection();
        const taskService = new Task(dbConnection);

        await taskService.deleteOne(id);

        res.status(202).send();
    } catch (error) {
        next(error);
    } finally {
        await dataLayer.destroyConnection();
    }
});
