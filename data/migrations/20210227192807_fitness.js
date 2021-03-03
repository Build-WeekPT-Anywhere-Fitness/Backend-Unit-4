exports.up = function (knex) {
  return knex.schema
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
      tbl.text("duration");
      tbl.integer("max_students").unsigned().defaultTo(5);
      tbl.integer("currently_enrolled").unsigned().defaultTo(0);
      tbl.datetime("date").notNullable();
      tbl.datetime("start_time").notNullable();
      tbl
        .integer("user_id")
        .references("id")
        .inTable("users")
        .unsigned()
        .notNullable()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("location", (tbl) => {
      tbl.increments();
      tbl.text("location_name", 128);
      tbl.text("add_1").notNullable();
      tbl.text("add_2");
      tbl.text("city").notNullable();
      tbl
        .integer("class_id")
        .references("id")
        .inTable("classes")
        .notNullable()
        .unsigned()
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
  // .createTable("class_location", (tbl) => {
  //   tbl
  //     .integer("class_id")
  //     .references("id")
  //     .inTable("class")
  //     .onUpdate("CASCADE")
  //     .onDelete("CASCADE")
  //     .unsigned();
  //   tbl
  //     .integer("location_id")
  //     .references("id")
  //     .inTable("location")
  //     .onUpdate("CASCADE")
  //     .onDelete("CASCADE")
  //     .unsigned();
  //   tbl.primary(["class_id", "location_id"]);
  // });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("class_location")
    .dropTableIfExists("location")
    .dropTableIfExists("classes")
    .dropTableIfExists("users");
};
