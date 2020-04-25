import { ErrorServerError } from '../services/lib/errors'

const ERR_STATUS_CODES = [400, 401, 403, 404, 422, 409];

export default function (err, req, res, next) {
    const error = {};
    let code = 500;

    if (err.response && ERR_STATUS_CODES.includes(err.response.status)) {
        code = err.response.status;
        error.message = err.response.data.message;
    } else {
        console.log('ERROR: ', err);

        if (err.code && ERR_STATUS_CODES.includes(err.code)) {
            code = err.code
            error.message = err.message
            if (err.code === 422) {
                error.errors = err.errors
            }
        } else {
            const serverError = new ErrorServerError();
            error.message = serverError.message;
        }
    }
    
    res.status(code).send(error);
    
    next();
}
