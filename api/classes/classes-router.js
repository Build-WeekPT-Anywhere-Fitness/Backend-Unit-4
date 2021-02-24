const router = require("express").Router();

const { route } = require("../server");
const Classes = require("./classes-model");

router.get("/", async (req, res) => {
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
    res.status(401).json({ message: "could not find class byt the id" });
  } else {
    try {
      res.status(200).json(classById);
    } catch (err) {
      res.status(500).json({ message: "server error" });
    }
  }
});

module.exports = router;
