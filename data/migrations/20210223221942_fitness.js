exports.up = function (knex) {
  return knex.schema
    .createTable("classes", (tbl) => {
      tbl.increments("id");
      tbl.text("class_name", 128).notNullable();
      tbl.text("class_type").notNullable();
      tbl.text("intensity");
      tbl.text("duration");
    })
    .createTable("users", (tbl) => {
      tbl.increments("id");
      tbl.text("username").notNullable().unique();
      tbl.text("email").notNullable().unique();
    });
  // .createTable("roles", (tbl) => {
  //   tbl.increments("id");
  //   tbl.text("role").notNullable();
  // });
};

exports.down = function (knex) {
  return (
    knex.schema
      .dropTableIfExists("classes")
      // .dropTableIfExists("roles")
      .dropTableIfExists("users")
  );
};
