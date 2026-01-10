const express  = require("express");
const router  = express.Router();
const {signupValidation} = require("../../middlewares");
const {userController} = require("../../controllers");


router.post("/create" , signupValidation, userController.create);




module.exports = router
