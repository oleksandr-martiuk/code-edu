import {Router} from 'express';
export const router = Router();

router.get('/', async (req, res, next) => {
    try {
        throw Error();

        res.send({ message: 'Some emails' });
    } catch (error) {
        error.message = 'Emails do not exists!';
        return next(error.message);
    }
});
