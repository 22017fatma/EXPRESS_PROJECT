import { logErrorToFile } from './logger.utils.js';

  function errorDev(err, res) {
     logErrorToFile(err);
        res.status(err.statusCode).json({

            status: err.status,
            errorType: err.name,
            message: err.message,
            stack: err.stack,
        });
    }
    function errorProd(err, res) {
        logErrorToFile(err);
        if (err.isOperational) {
            res.status(err.statusCode).json({
                status: err.status,
                errorType: err.name,
                message: err.message,
            });
        } else {
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong!',
        });
        }
    }
    function ErrorHandler(err, req, res, next) {
        err.statusCode = err.statusCode ?? 500;
        err.status = err.status ?? 'error';
        const env = process.env.NODE_ENV;
        console.log('Error env:', env);
        if (env === 'development') {
            return errorDev(err,res);
        } else {
         return errorProd(err,res);
        }
    }


export {
    ErrorHandler,
};