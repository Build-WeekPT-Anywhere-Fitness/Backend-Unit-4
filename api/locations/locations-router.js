const router = require("express").Router();

const Locations = require("./locations-model");
const restricted = require("../auth/restricted-middleware");
const checkRole = require("../auth/check-role-middleware");

router.get("/", async (req, res) => {
  try {
    const locations = await Locations.find();
    res.status(200).json(locations);
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});

router.post("/", restricted, checkRole("true"), async (req, res) => {
  const location = req.body;
  console.log(location);

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

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const location = await Locations.findById(id);
  try {
    if (location) {
      res.status(200).json(location);
    } else {
      res.status(404).json({ message: "id not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});

router.put("/:id", restricted, checkRole("true"), async (req, res) => {
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

router.delete("/:id", restricted, checkRole("true"), (req, res) => {
  const { id } = req.params;
  Locations.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.status(204).json({ removed: deleted });
      } else {
        res.status(404).json({ message: "could not find address by that id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "server error", error: err.message });
    });
});

module.exports = router;
