const db = require("../../data/db-config");

module.exports = {
  find,
  findById,
  add,
};

function find() {
  return db("users");
}

function findById(id) {
  return db("users").where({ id }).first();
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}