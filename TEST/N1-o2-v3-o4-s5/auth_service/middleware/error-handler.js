export default function (err, req, res, next) {
    console.log('ERROR: ', err);
    res.status(err.code).send(error);

    next();
}
