class CustomError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode;
        this.status = statusCode >= 400 && statusCode < 500 ? "Failed" : "Server Error";
        Error.captureStackTrace(this, this.construction)
        this.isOperational = true
    }
}

export default CustomError
