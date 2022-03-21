const express = require("express");

const userController = require (./src/constrollers/user.controllers);
const app express();

app.use(express.json());

app.use("/users",usersController);

module.exports= app