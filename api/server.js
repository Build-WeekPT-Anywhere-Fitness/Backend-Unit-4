const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const ClassesRouter = require("./classes/classes-router");
const UsersRouter = require("./users/users-router");
const AuthRouter = require("./auth/auth-router");
const LocationRouter = require("./locations/locations-router");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use("/api/classes", ClassesRouter);
server.use("/api/users", UsersRouter);
server.use("/api/users", AuthRouter);
server.use("/api/locations", LocationRouter);

module.exports = server;
