import { Router } from 'express';
import AppDataLayer from '../../services/lib/app-data-layer';
import Auth from '../../services/core/auth';

export const router = Router();
const dataLayer = new AppDataLayer();

router.post('/register', async (req, res, next) => {
    const dbConn = await dataLayer.createConnection();

    try {
        const { login, password } = req.body;

        const authService = new Auth(dbConn);
        const user = await authService.register({login, password});

        res.status(201).send(user);
    } catch (error) {
        next(error);
    } finally {
        dataLayer.destroyConnection();
    }
});

router.post('/login', async (req, res, next) => {
    const dbConnection = await dataLayer.createConnection();

    try {
        const { login, password } = req.body;

        const authService = new Auth(dbConnection);
        const token = await authService.login({login, password});

        res.status(200).send({token});
    } catch (error) {
        next(error);
    } finally {
        dataLayer.destroyConnection();
    }
});
