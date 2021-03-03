const db = require("../../data/db-config");

module.exports = {
  find,
  findById,
  add,
  edit,
  remove,
};

function find() {
  return db("classes");
}

function findById(classId) {
  return db("classes").where("id", classId).first();
}

async function add(newClass) {
  const [id] = await db("classes").insert(newClass, "id");
  return findById(id);
}

async function edit(change, id) {
  return db("classes").where("id", Number(id)).update(change);
}

async function remove(id) {
  return db("classes").where("id", Number(id)).del();
}

// async function addLocation(id, location) {}
