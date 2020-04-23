import { Router } from 'express';
import AppDataLayer from '../../services/lib/app-data-layer';
import Auth from '../../services/core/auth';

export const router = Router();
const dataLayer = new AppDataLayer();

router.post('/login', async (req, res, next) => {
    const dbConn = await dataLayer.createConnection();

    try {
        const { login, password } = req.body;

        const userService = new User(dbConn);
        const token = await userService.login({login, password});

        res.send({ 'token': token });
    } catch (error) {
        return next(error);
    } finally {
        dataLayer.destroyConnection();
    }
});

router.post('/register', async (req, res, next) => {
    const dbConn = await dataLayer.createConnection();

    try {
        const { login, password } = req.body;

        const authService = new Auth(dbConn);
        const user = await authService.register({login, password});

        res.send({ data: user });
    } catch (error) {
        return next(error);
    } finally {
        dataLayer.destroyConnection();
    }
});
