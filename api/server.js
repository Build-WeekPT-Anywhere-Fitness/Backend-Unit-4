const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const ClassesRouter = require("./classes/classes-router");
const UsersRouter = require("./users/users-router");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use("/api/classes", ClassesRouter);
server.use("/api/users", UsersRouter);

module.exports = server;
