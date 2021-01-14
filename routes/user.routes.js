const Express 			= require("express");
const UserRoutes 		= Express.Router();
const UserController    = require('../controllers/user.controller');

UserRoutes.get("/signup", function(req, res, next) {
    new UserController(req, res).signup();
});

module.exports = UserRoutes;
