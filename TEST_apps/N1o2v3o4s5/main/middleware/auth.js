import {ErrorUnauthorized} from '../services/lib/errors';
import jwt from 'jsonwebtoken';

export default function (req, res, next) {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        throw new ErrorUnauthorized(`Token not provided!`);
    }

    const token = authHeader.replace('Bearer ', '');

    try {
        const {userId} = jwt.verify(token, process.env.SECRET);
        req.locals = {userId};
    } catch(err) {
        throw new ErrorUnauthorized(`Invalid token!`);
    }

    next();
}
