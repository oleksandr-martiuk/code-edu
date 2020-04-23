import auth from '../../middleware/auth';
import {Router} from 'express';
export const router = Router();

router.get('/:userId', auth, async (req, res, next) => {
    try {
        res.send({ data: 'User-tasks: get by userId' });
    } catch (error) {
        return next(error);
    }
});

router.post('/', auth, async (req, res, next) => {
    try {
        res.send({ data: 'User-tasks: post' });
    } catch (error) {
        return next(error);
    }
});

router.put('/', auth, async (req, res, next) => {
    try {
        res.send({ data: 'User-tasks: put' });
    } catch (error) {
        return next(error);
    }
});

router.delete('/', auth, async (req, res, next) => {
    try {
        res.send({ data: 'User-tasks: delete' });
    } catch (error) {
        return next(error);
    }
});
