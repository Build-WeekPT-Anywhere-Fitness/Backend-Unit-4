const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const ClassesRouter = require("./classes/classes-router");

const server = express();

server.use(cors());
server.use(helmet());
server.server.use(express.json());
server.use("/api/classes", ClassesRouter);

module.exports = server;
