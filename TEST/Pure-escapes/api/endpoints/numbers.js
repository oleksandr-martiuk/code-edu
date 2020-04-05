import {Router} from 'express';
export const router = Router();

import Numbers from '../../services/numbers';

const numService = new Numbers();

router.get('/', (req, res, next) => {
    try {
        const num = +req.query.int;
        if (!num) {
            throw Error("Please provide 'int' parameter as an integer");
        }

        const result = numService.getIntegerRes(num);

        res.send({ message: result });
    } catch (err) {
        res.statusCode = 400;
        res.send({
            'Error': {
                message: err.message || "Please check '/numbers' request",
                stack: err
            }
        });
    }
});
