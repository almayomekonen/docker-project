const express = require('express');
const { getAllUsers, getUserById, createUser, deleteUser } = require('../controllers/users.controller');

const routes = express.Router();

routes.get("/", getAllUsers);
routes.post("/", createUser);
routes.get("/:id", getUserById);
routes.delete("/:id", deleteUser);

module.exports = routes;