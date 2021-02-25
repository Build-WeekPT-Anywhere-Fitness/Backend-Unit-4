const db = require("../../data/db-config");

module.exports = {
  find,
  findById,
  add,
};

function find() {
  return db("classes");
}

function findById(id) {
  return db("classes").where({ id }).first();
}

function add(newClass) {
  return db("classes")
    .insert(newClass)
    .then((ids) => {
      return findById(ids[0]);
    });
}
