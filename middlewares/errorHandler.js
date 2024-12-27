const winston = require('winston');

const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500; // Default to 500 if statusCode is not set
    const message = err.message || 'Internal Server Error';

    logger.error(`${statusCode} - ${message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    res.status(statusCode).json({
        error: {
            name: err.name,
            message,
        },
    });
};

const logger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
    ],
});

module.exports = errorHandler;