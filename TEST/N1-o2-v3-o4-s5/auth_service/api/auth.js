import { Router } from 'express';
import AppDataLayer from '../services/lib/app-data-layer';
import Auth from '../services/core/auth';

export const router = Router();

router.post('/register', async (req, res, next) => {
    const dataLayer = new AppDataLayer();

    try {
        Auth.validateUserFields(req.body);

        const dbConnection = await dataLayer.createConnection();
        const { login, password } = req.body;

        const authService = new Auth(dbConnection);
        const user = await authService.register(login, password);

        res.status(201).send(user);
    } catch (error) {
        next(error);
    } finally {
        await dataLayer.destroyConnection();
    }
});

router.post('/login', async (req, res, next) => {
    const dataLayer = new AppDataLayer();

    try {
        Auth.validateUserFields(req.body);

        const dbConnection = await dataLayer.createConnection();
        const { login, password } = req.body;

        const authService = new Auth(dbConnection);
        const token = await authService.login(login, password);

        res.status(200).send({token});
    } catch (error) {
        next(error);
    } finally {
        await dataLayer.destroyConnection();
    }
});
