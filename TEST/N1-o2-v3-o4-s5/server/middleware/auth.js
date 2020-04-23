import { ErrorUnauthorized } from '../services/lib/errors';
import jwt from 'jsonwebtoken';

export default async function (req, res, next) {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        throw new ErrorUnauthorized(`Token not provided!`);
    }

    const token = authHeader.replace('Bearer ', '');

    console.log('TOKEN: ', token);
    console.log('SECRET: ', process.env.SECRET);

    try {
        const someResponse = await jwt.verify(token, process.env.SECRET);
        console.log('someResponse: ', someResponse);
    } catch(err) {
        if (err instanceof jwt.JsonWebTokenError) {
            throw new ErrorUnauthorized(`Invalid token!`);
        }
        next(err);
    }
}
