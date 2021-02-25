const db = require("../../data/db-config");

module.exports = {
  find,
  findById,
  add,
};

async function find() {
  return await db("users");
}

function findById() {}

function add() {}
