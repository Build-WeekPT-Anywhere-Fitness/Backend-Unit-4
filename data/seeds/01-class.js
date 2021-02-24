exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("classes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("classes").insert([
        {
          id: 1,
          class_name: "Hot yoga with Kato",
          class_type: "yoga",
          intensity: "Intermediate",
          duration: "45 mins",
        },
        {
          id: 2,
          class_name: "HIIT with Danielle",
          class_type: "High intensity interval training",
          intensity: "Hard",
          duration: "45 mins",
        },
        {
          id: 3,
          class_name: "Zumba with Kyle",
          class_type: "zumba",
          intensity: "intermediate",
          duration: "45 mins",
        },
        {
          id: 4,
          class_name: "Pole Dancing with Austin",
          class_type: "pole",
          intensity: "hard",
          duration: "45 mins",
        },
      ]);
    });
};
