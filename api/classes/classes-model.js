const db = require("../../data/db-config");

module.exports = {
  find,
  findById,
};

function find() {
  return db("classes");
}

function findById(id) {
  return db("classes").where({ id }).first();
}
