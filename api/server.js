const express = require("express");

const ClassesRouter = require("./classes/classes-router");

const server = express();

server.use(express.json());
server.use("/api/classes", ClassesRouter);

module.exports = server;
