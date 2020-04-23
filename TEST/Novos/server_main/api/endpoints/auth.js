import { Router } from 'express';
import AppDataLayer from '../../services/lib/app-data-layer';
import User from '../../services/core/user';

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

        const userService = new User(dbConn);
        const user = await userService.login({login, password});

        res.send({ data: users });
    } catch (error) {
        return next(error);
    } finally {
        dataLayer.destroyConnection();
    }
});
