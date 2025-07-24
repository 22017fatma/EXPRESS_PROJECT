import {ErrorHandler} from '../utils/ErrorHandler.utils.js';

function customError(err, req, res, next) {
    ErrorHandler(err, req, res, next);
}

export {
    customError
};