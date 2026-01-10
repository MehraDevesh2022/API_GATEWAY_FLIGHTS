const { userService } = require("../services");
const { AppError, ErrorResponse, SuccessResponse } = require("../utils");
const { StatusCodes } = require("http-status-codes");



const create = async (req, res) => {
    try {
        const userData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        const response = await userService.create(userData);
        SuccessResponse.data = response;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (err) {
        if (err instanceof AppError) {
            ErrorResponse.error = err;
            ErrorResponse.message = err.explanation;
            return res.status(err.statusCode).json(...ErrorResponse);
        }
    }
}


module.exports = {
    create
}