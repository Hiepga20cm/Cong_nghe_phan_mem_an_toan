const { Router } = require("express");
const express = require("express");
const routes = Router();

routes.post("/login", authController.login);

module.exports = routes;
