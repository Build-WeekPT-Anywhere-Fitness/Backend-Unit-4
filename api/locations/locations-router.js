const router = require("express").Router();

const Locations = require("./locations-model");
const restricted = require("../auth/restricted-middleware");

router.get("/", async (req, res) => {
  try {
    const locations = await Locations.find();
    res.status(200).json(locations);
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});

router.post("/", restricted, async (req, res) => {
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

router.put("/:id", restricted, async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  if (!changes.add_1 || !changes.city) {
    res
      .status(401)
      .json({ message: "include address and city to edit this location" });
  } else {
    try {
      const updatedLocation = await Locations.update(id, changes);
      if (updatedLocation) {
        res.status(201).json(updatedLocation);
      }
    } catch (err) {
      res.status(500).json({ message: "sever error", error: err.message });
    }
  }
});

module.exports = router;
