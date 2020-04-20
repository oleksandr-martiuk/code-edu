import {Router} from 'express';
export const router = Router();

router.post('/', async (req, res, next) => {
    try {
        res.send({ message: 'Tasks: /post' });
    } catch (error) {
        return next(error);
    }
});

router.get('/', async (req, res, next) => {
    try {
        res.send({ message: 'Tasks: /get (all)' });
    } catch (error) {
        return next(error);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const {id} = req.query;
        res.send({ message: 'Tasks: /get (1)' });
    } catch (error) {
        return next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const {id} = req.query;
        res.send({ message: 'Tasks: /delete (1)' });
    } catch (error) {
        return next(error);
    }
});
