import authMiddleware from '../../middleware/auth';

import {Router} from 'express';
export const router = Router();

router.post('/', authMiddleware, async (req, res, next) => {
    try {
        res.send({ data: 'Tasks: /post' });
    } catch (error) {
        return next(error);
    }
});

router.get('/', authMiddleware, async (req, res, next) => {
    try {
        res.send({ data: 'Tasks: /get (all)' });
    } catch (error) {
        return next(error);
    }
});

router.get('/:id', authMiddleware, async (req, res, next) => {
    try {
        const {id} = req.query;
        res.send({ data: 'Tasks: /get (1)' });
    } catch (error) {
        return next(error);
    }
});

router.delete('/:id', authMiddleware, async (req, res, next) => {
    try {
        const {id} = req.query;
        res.send({ data: 'Tasks: /delete (1)' });
    } catch (error) {
        return next(error);
    }
});
