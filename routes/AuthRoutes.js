const express = require("express");
const AuthController = require("../controllers/AuthController");
const authController = new AuthController();

const router = express.Router();

router.post("/login", authController.login);

module.exports = router;