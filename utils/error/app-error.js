class AppError extends Error {
    constructor(status, message) {
        super(message);
        this.statusCode = status,
            this.explanation = message
    }
}

module.exports = AppError