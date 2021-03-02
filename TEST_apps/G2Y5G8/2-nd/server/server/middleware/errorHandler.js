module.exports = (err, req, res, next) => {
   const error = {};

   error.code  = err.code || 500;
   error.message = err.message || 'Internal Server Error';

   res.status(error.code).send(error);

   next();
}
