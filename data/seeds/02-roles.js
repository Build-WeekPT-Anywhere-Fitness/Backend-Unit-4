exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("roles")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("roles").insert([
        { id: 1, role: "instructor" },
        { id: 2, role: "client" },
      ]);
    });
};
