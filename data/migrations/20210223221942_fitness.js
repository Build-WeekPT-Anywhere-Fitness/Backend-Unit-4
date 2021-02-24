exports.up = function (knex) {
  return knex.schema.createTable("classes", (tbl) => {
    tbl.increments("id");
    tbl.text("class_name", 128).notNullable();
    tbl.text("class_type").notNullable();
    tbl.text("intensity");
    tbl.text("duration");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("classes");
};
