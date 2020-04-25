import { Router } from 'express';
import User from '../../services/core/users';

export const router = Router();

router.post('/register', async (req, res, next) => {
    try {
        User.validateUserFields(req.body);
        const { login, password } = req.body;

        const userService = new User();
        const user = await userService.register(login, password);

        res.status(201).send(user);
    } catch (error) {
        next(error);
    }
});

router.post('/login', async (req, res, next) => {
    try {
        User.validateUserFields(req.body);
        const { login, password } = req.body;

        const userService = new User();
        const token = await userService.login(login, password);

        res.status(200).send(token);
    } catch (err) {
        next(err);
    }
});
