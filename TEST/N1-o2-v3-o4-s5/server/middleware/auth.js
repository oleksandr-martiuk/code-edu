import { ErrorUnauthorized } from '../services/lib/errors';
import jwt from 'jsonwebtoken';

export default function (req, res, next) {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        throw new ErrorUnauthorized(`Token not provided!`);
    }

    const token = authHeader.replace('Bearer ', '');
    console.log('TOKEN: ', token);

    try {
        const result = jwt.verify(token, process.env.SECRET);
    } catch(err) {
        throw new ErrorUnauthorized(`Invalid token!`);
    }

    next();
}
