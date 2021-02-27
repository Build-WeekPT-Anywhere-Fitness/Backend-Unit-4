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

router.post("/", async (req, res) => {
  const location = req.body;

  if (!location.add_1 || !location.city) {
    res.status(401).json({
      message: "Please include an address and city to add a new location",
    });
  } else {
    try {
      const newLocation = await Locations.add(location);
      res.status(201).json(newLocation);
    } catch (err) {
      res.status(500).json({ message: "server error" });
    }
  }
});

module.exports = router;
