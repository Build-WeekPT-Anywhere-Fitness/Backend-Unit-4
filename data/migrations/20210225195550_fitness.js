exports.up = function (knex) {
  return knex.schema
    .createTable("location", (tbl) => {
      tbl.increments();
      tbl.text("location_name", 128);
      tbl.text("add_1").notNullable();
      tbl.text("add_2");
      tbl.text("city").notNullable();
    })
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.text("username").notNullable().unique();
      tbl.text("email").notNullable().unique();
      tbl.text("name", 128).notNullable();
      tbl.text("password").notNullable().unique();
      tbl.boolean("instructor").notNullable();
    })
    .createTable("classes", (tbl) => {
      tbl.increments();
      tbl.text("class_name", 128).notNullable();
      tbl.text("class_type").notNullable();
      tbl.text("intensity");
      tbl.datetime("start_time").notNullable();
      tbl.text("duration");
      tbl.datetime("date").notNullable();
      tbl.integer("max_students").unsigned().defaultTo(5);
      tbl.integer("currently_enrolled").unsigned().defaultTo(0);
      tbl
        .integer("location_id")
        .references("id")
        .inTable("location")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .unsigned()
        .notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("classes")
    .dropTableIfExists("users")
    .dropTableIfExists("location");
};
