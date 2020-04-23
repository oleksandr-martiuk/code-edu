export default function (err, req, res, next) {
    if (err.code) {
        res.status(err.code).json({ message: err.message });
    }
    next(err);
}
