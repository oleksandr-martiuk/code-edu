import { Router } from 'express';
import User from '../../services/core/users';

export const router = Router();

router.post('/register', async (req, res, next) => {
    try {
        User.validateRegisterUserFields(req.body);
        const { login, password, email } = req.body;

        const userService = new User();
        const authData = await userService.register(login, password, email);

        res.status(201).send(authData);
    } catch (error) {
        next(error);
    }
});

router.post('/login', async (req, res, next) => {
    try {
        User.validateLoginUserFields(req.body);
        const { login, password } = req.body;

        const userService = new User();
        const authData = await userService.login(login, password);

        res.status(200).send(authData);
    } catch (err) {
        next(err);
    }
});
