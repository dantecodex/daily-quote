import CustomError from "../utils/customError.js";

const devError = (res, error) => {
    res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
        stackTrace: error.stack,
        error
    })
}

const validationErrorHandler = (error) => {
    const msg = `Invalid Input data: ${error.message}`
    return new CustomError(msg, 400)
}

const duplicateKeyError = (error) => {
    const msg = `User with given ${Object.keys(error.keyValue)[0]}: ${Object.values(error.keyValue)[0]} already exist`
    return new CustomError(msg, 400)
}

const expiredJwtHandler = (err) => {
    return new CustomError('JWT token has expired, Please Login again', 401)
}

const invalidJwtHandler = (err) => {
    return new CustomError('Invalid Token, Please Login again', 401)

}

const prodError = (res, error) => {
    if (error.isOperational === true) {

        res.status(error.statusCode).render("error", {
            message: error.message
        });
    } else {
        res.status(500).render("error", {
            message: "Something went wrong"
        });
    }
}

const globalErrorHandler = (error, req, res, next) => {
    error.status = error.status || "Error"
    error.statusCode = error.statusCode || 500

    if (process.env.ENVI === 'dev') {
        devError(res, error)
    }

    if (process.env.ENVI === 'prod') {

        if (error.name === 'ValidationError')
            error = validationErrorHandler(error)
        if (error.code == 11000)
            error = duplicateKeyError(error)
        if (error.name === 'TokenExpiredError')
            error = expiredJwtHandler(error)
        if (error.name === 'JsonWebTokenError')
            error = invalidJwtHandler(error)
        prodError(res, error)
    }
}

export default globalErrorHandler