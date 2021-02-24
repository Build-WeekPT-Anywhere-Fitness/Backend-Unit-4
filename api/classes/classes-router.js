const router = require("express").Router();

const Classes = require("./classes-model");

router.get("/", async (req, res) => {
  try {
    const classes = await Classes.get();
    res.status(200).json(classes);
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
