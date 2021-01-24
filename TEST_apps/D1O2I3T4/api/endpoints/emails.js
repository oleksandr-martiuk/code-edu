import {Router} from 'express';
export const router = Router();

router.post('/', async (req, res, next) => {
    try {
        res.send({ message: '' });
    } catch (error) {
        return next(error);
    }
});
