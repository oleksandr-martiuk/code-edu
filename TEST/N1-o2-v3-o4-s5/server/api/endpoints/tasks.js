import auth from '../../middleware/auth';
import {Router} from 'express';
export const router = Router();

router.post('/', auth, async (req, res, next) => {
    try {
        res.send({ data: 'Tasks: /post' });
    } catch (error) {
        return next(error);
    }
});

router.get('/', auth, async (req, res, next) => {
    try {
        res.send({ data: 'Tasks: /get (all)' });
    } catch (error) {
        return next(error);
    }
});

router.get('/:id', auth, async (req, res, next) => {
    try {
        res.send({ data: 'Tasks: /get (1)' });
    } catch (error) {
        return next(error);
    }
});

router.delete('/:id', auth, async (req, res, next) => {
    try {
        res.send({ data: 'Tasks: /delete (1)' });
    } catch (error) {
        return next(error);
    }
});
