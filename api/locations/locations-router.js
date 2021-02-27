const router = require("express").Router();

const Locations = require("./locations-model");

router.get("/", async (req, res) => {
  try {
    const locations = await Locations.find();
    res.status(200).json(locations);
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
