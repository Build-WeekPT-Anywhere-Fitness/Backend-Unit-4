const router = require("express").Router();

const Users = require("../users/users-model");
const Classes = require("./classes-model");
const restricted = require("../auth/restricted-middleware");
const checkRole = require("../auth/check-role-middleware");

router.get("/", restricted, async (req, res) => {
  //remember to put restricted back on
  try {
    const classes = await Classes.find();
    res.status(200).json(classes);
  } catch (err) {
    res.status(500).json({ message: "server error", error: err.message });
  }
});

router.get("/:id", restricted, async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const classById = await Classes.findById(id);

  if (classById) {
    try {
      res.status(200).json(classById);
    } catch (err) {
      res.status(400).json({ message: "Server error", error: err.message });
    }
  } else {
    res.status(500).json({ message: "Could not find class by the id" });
  }
});

router.post("/", restricted, async (req, res) => {
  //remember to insert checkRole function
  const classBody = req.body;
  console.log(classBody);
  if (
    !classBody.class_name ||
    !classBody.class_type ||
    !classBody.date ||
    !classBody.start_time
  ) {
    res.status(404).json({
      message: "A class name, type and date are required",
    });
  } else {
    try {
      const newClass = await Classes.add(classBody);
      res.status(201).json(newClass);
    } catch (err) {
      res.status(500).json({ message: "server error", error: err.message });
    }
  }
});

// router.get("/class-location", async (req, res) => {
//   const classLocations = await Classes.getClassLocation();
//   try {
//     res.status(200).json(classLocations);
//   } catch (err) {
//     res.status(500).json({ message: "server error" });
//   }
// });

module.exports = router;
