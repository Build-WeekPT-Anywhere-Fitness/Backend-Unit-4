exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("location")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("location").insert([
        {
          id: 1,
          location_name: "park",
          add_1: "123 Maple St ",
          add_2: "",
          city: "Springflied",
        },
        {
          id: 2,
          location_name: "gym",
          add_1: "525 Broadway",
          add_2: "",
          city: "Philadelphia",
        },
        {
          id: 3,
          location_name: "parking lot",
          add_1: "790 Western Ave",
          add_2: "",
          city: "Tucson",
        },
      ]);
    });
};
