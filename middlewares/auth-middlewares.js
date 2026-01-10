const { AppError, ErrorResponse } = require('../utils');
const { StatusCodes } = require('http-status-codes');




const sendValidationError = (res, message, detail) => {
    ErrorResponse.message = message;
    ErrorResponse.error = new AppError([detail], StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json({ ...ErrorResponse });
}


const signupValidation = (req, res, next) => {
    const errorMessage = "Something went wrong while creating the user. Please try again later.";
    const signupValidations = [
        { condition: !req.body.email, detail: "Email is required to signup." },
        { condition: !req.body.password, detail: "Password is required to signup." },
        { condition: !req.body.name, detail: "Name is required to signup." }
    ]

    for (const { condition, detail } of signupValidations) {
        if (condition) {
            sendValidationError(res, errorMessage, detail);
        }
    }
    next();
}



const signinValidation = (req, res, next) => {
    const errorMessage = "Something went wrong while signing in. Please try again later.";
    const signinValidations = [
        { condition: !req.body.email, detail: "Email is required to signin." },
        { condition: !req.body.password, detail: "Password is required to signin." }
    ]

    for (const { condition, detail } of signinValidations) {
        if (condition) {
            sendValidationError(res, errorMessage, detail);
        }
    }
    next();
}





module.exports = { signupValidation, signinValidation }