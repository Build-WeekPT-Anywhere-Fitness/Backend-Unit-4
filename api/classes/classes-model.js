const db = require("../../data/db-config");

module.exports = {
  find,
  findById,
  add,
  edit,
};

// function find() {
//   return db("classes as c")
//     .join("location as l", "l.id", "c.location_id")
//     .join("users as u", "u.id", "c.id")
//     .select(
//       "c.*",
//       "l.location_name",
//       "l.add_1",
//       "l.add_2",
//       "l.city",
//       "u.name as trainer",
//       "u.email"
//     );
// }

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
