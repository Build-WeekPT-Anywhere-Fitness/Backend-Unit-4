const router = require("express").Router();

const Users = require("./users-model");

router.get("/", async (req, res) => {
  try {
    const users = Users.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
