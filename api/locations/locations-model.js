const db = require("../../data/db-config");

module.exports = {
  find,
  add,
};

function find() {
  return db("location");
}

function findById(id) {
  return db("location").where({ id }).first();
}

function add(location) {
  return db("location")
    .insert(location)
    .then((ids) => {
      return findById(ids[0]);
    });
}
