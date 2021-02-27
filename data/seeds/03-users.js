exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          name: "Kato",
          username: "Kato",
          email: "Kato@fitness.com",
          password: "3",
          instructor: false,
        },
        {
          id: 2,
          name: "Danielle",
          username: "Danielle",
          email: "danielle@fitness.com",
          password: "y",
          instructor: false,
        },
        {
          id: 3,
          name: "Austin",
          username: "Austin",
          email: "austin@fitness.com",
          password: "e",
          instructor: true,
        },
      ]);
    });
};
