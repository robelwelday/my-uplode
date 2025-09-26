const AppError = require('../utils/AppError');

const notFound = (req, res, next) => {
  next(new AppError(`Not Found - ${req.originalUrl}`, 404));
};

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    ok: false,
    message: err.message || 'Server Error',
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};

module.exports = { notFound, errorHandler };
