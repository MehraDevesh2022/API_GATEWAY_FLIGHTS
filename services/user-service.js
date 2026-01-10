const { UserRepository } = require("../repositories");
const bcrypt = require('bcrypt');

const {AppError} = require("../utils");
const { StatusCodes } = require("http-status-codes");
const userRepository = new UserRepository();

const create = async (data) => {
     try {
          const user = await userRepository.create(data);
          
          return user;

     } catch (error) {
     }
}




module.exports = {
     create
}