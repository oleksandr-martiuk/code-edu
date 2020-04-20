import {Router} from 'express';
import DB from '../../services/lib/db/gateway';

export const router = Router();
const db = new DB();

router.post('/login', async (req, res, next) => {
    try {
        const connection = await db.initGateway();
        const users = await connection('users').select();

        res.send({ message: users });
    } catch (error) {
        return next(error);
    }
});

router.post('/register', async (req, res, next) => {
    try {
        res.send({ message: 'Auth: /register' });
    } catch (error) {
        return next(error);
    }
});
