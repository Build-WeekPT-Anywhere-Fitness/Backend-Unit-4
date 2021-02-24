exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("classes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("classes").insert([
        {
          id: 1,
          class_name: "Hot yoga with Kato",
          class_type: "Yoga",
          intensity: "Intermediate",
          duration: "45 mins",
          date: "",
        },
        {
          id: 2,
          class_name: "HIIT with Danielle",
          class_type: "High intensity interval training",
          intensity: "Hard",
          duration: "45 mins",
          date: "",
        },
        {
          id: 3,
          class_name: "Zumba with Kyle",
          class_type: "Zumba",
          intensity: "Intermediate",
          duration: "45 mins",
          date: "",
        },
        {
          id: 4,
          class_name: "Pole Dancing with Austin",
          class_type: "Pole",
          intensity: "Hard",
          duration: "45 mins",
          date: "",
        },
      ]);
    });
};
