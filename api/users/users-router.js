const router = require("express").Router();

const Users = require("./users-model");
const Classes = require("../classes/classes-model");

//get array of users
router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ message: "server error" });
    });
});

//get user by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await Users.findById(id);
  if (user) {
    try {
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: "server error", error: err.message });
    }
  } else {
    res.status(401).json({ message: "User not found" });
  }
});

//add a class by user id
//this is where I populate the data for that user_id
//foreign column
router.post("/:id/add_class", async (req, res) => {
  const { id } = req.params;
  const addedClass = { ...req.body, user_id: id }; // <--

  if (
    !addedClass.class_name ||
    !addedClass.class_type ||
    !addedClass.date ||
    !addedClass.start_time
  ) {
    res.status(404).json({
      message:
        "Please add a class name, type, date and time to add a new class",
    });
  } else {
    try {
      const newClass = await Classes.add(addedClass);
      res.status(201).json({ data: newClass });
    } catch (err) {
      res.status(500).json({ message: "server error", error: err.message });
    }
  }
});

module.exports = router;
