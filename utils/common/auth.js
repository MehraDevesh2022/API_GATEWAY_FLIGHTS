const jwt = require('jsonwebtoken');
const { serverConfig } = require("../../config");
const { AppError } = require("../index");
const { StatusCodes } = require("http-status-codes");

const jwtToken = (input) => {
    try {
        jwt.sign({ user: input }, serverConfig.JWT_SECRET, { expiresIn: serverConfig.expiresIn });
    } catch (error) {
        throw new AppError([error.message], StatusCodes.UNPROCESSABLE_ENTITY);
    }

}

const verifyToken = (token) => {
    try {
        return jwt.verify(token, serverConfig.JWT_SECRET);
    } catch (error) {
        throw new AppError([error.message], StatusCodes.UNPROCESSABLE_ENTITY);
    }
}


module.exports = {
    jwtToken,
    verifyToken
}