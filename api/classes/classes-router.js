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

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const change = req.body;
  console.log(change);

  if (
    !change.class_name ||
    !change.class_type ||
    !change.date ||
    !change.start_time
  ) {
    res.status(404).json({
      message:
        "Please provide class name, type, date and start time to edit this class",
    });
  } else {
    try {
      const editedClass = await Classes.edit(change, id);
      res.status(202).json(editedClass);
    } catch (err) {
      res.status(500).json({ message: "server error", error: err.message });
    }
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const classToDelete = await Classes.remove(id);
    if (classToDelete) {
      res.status(204).json({ message: "Class deleted" });
    } else {
      res.status(404).json({ message: "Could not find class byt that Id" });
    }
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
