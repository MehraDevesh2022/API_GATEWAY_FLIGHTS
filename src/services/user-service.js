const { AppError } = require('../utils');
const { StatusCodes } = require("http-status-codes");
const { UserRepository } = require("../repositories")

const userRepository = new UserRepository();


async function create(data) {
    try {
        const res = await userRepository.create(data);
        return res;
    } catch (error) {
        throw new AppError(["Somting went wrong."], StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports ={
    create
}