import { ErrorServerError } from '../services/lib/errors'

const ERR_STATUS_CODES = [400, 401, 403, 404, 422, 409];

export default function (err, req, res, next) {
    console.log('ERROR: ', err);
    const error = {};

    if (err.code && ERR_STATUS_CODES.includes(err.code)) {
        error.message = err.message
        if (err.code === 422) {
            error.errors = err.errors
        }
    } else {
        const serverError = new ErrorServerError();
        err.code = serverError.code;
        error.message = serverError.message;
    }

    res.status(err.code).send(error);

    next();
}
