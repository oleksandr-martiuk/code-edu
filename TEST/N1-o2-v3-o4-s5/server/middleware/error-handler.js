import { ErrorServerError } from '../services/lib/errors'

export default function (err, req, res, next) {
    if (!err.code) {
        err = new ErrorServerError();
    }

    res.status(err.code).json({ message: err.message });
    next();
}
