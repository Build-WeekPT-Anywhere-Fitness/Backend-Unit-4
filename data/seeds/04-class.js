exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("classes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("classes").insert([
        {
          id: 1,
          class_name: "Zumba with Kyle",
          class_type: "Zumba",
          intensity: "Intermediate",
          img_url: "",
          thumbnail_url: "",
          description: "",
          duration: "45 mins",
          start_time: "5pm",
          date: "Feb 30",
          max_students: 5,
          location_id: 2,
        },
        {
          id: 2,
          class_name: "Zumba with Kyle",
          class_type: "Zumba",
          intensity: "Intermediate",
          img_url: "",
          thumbnail_url: "",
          description: "",
          duration: "45 mins",
          start_time: "5pm",
          date: "Feb 30",
          max_students: 5,
          location_id: 1,
        },
        {
          id: 3,
          class_name: "Zumba with Kyle",
          class_type: "Zumba",
          intensity: "Intermediate",
          img_url: "",
          thumbnail_url: "",
          description: "",
          duration: "45 mins",
          start_time: "5pm",
          date: "Feb 30",
          max_students: 5,
          location_id: 2,
        },
        {
          id: 4,
          class_name: "Zumba with Kyle",
          class_type: "Zumba",
          intensity: "Intermediate",
          img_url: "",
          thumbnail_url: "",
          description: "",
          duration: "45 mins",
          start_time: "5pm",
          date: "Feb 30",
          max_students: 5,
          location_id: 3,
        },
      ]);
    });
};
