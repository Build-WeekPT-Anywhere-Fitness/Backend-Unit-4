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
          role: "client",
        },
        {
          id: 2,
          name: "Danielle",
          username: "Danielle",
          email: "danielle@fitness.com",
          password: "y",
          role: "client",
        },
        {
          id: 3,
          name: "Austin",
          username: "Austin",
          email: "austin@fitness.com",
          password: "e",
          role: "instructor",
        },
      ]);
    });
};
