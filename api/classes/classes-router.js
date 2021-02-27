const router = require("express").Router();

const Classes = require("./classes-model");
const restricted = require("../auth/restricted-middleware");
const checkRole = require("../auth/check-role-middleware");

router.get("/", restricted, checkRole("true"), async (req, res) => {
  try {
    const classes = await Classes.find();
    res.status(200).json(classes);
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const classById = await Classes.findById(id);
  if (!classById) {
    res.status(401).json({ message: "could not find class by the id" });
  } else {
    try {
      res.status(200).json(classById);
    } catch (err) {
      res.status(500).json({ message: "server error" });
    }
  }
});

router.post("/", async (req, res) => {
  const classBody = req.body;

  if (
    !classBody.class_name ||
    !classBody.class_type ||
    !classBody.date ||
    !classBody.start_time
  ) {
    res
      .status(404)
      .json({ message: "A class name, type and date are required" });
  } else {
    try {
      const newClass = await Classes.add(classBody);
      res.status(201).json(newClass);
    } catch (err) {
      res
        .status(500)
        .json({ message: "Could not create your class at this moment" });
    }
  }
});

module.exports = router;
