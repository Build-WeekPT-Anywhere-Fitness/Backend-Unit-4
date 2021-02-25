const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

const Users = require("../users/users-model");
const { isValid } = require("../users/users-service");

router.post("/", async (req, res) => {
  const user = req.body;

  if (user) {
    const rounds = process.env.BCRYPTJS_ROUNDS || 10;
    const hash = bcryptjs.hashSync(user.password, rounds);
    console.log(hash);

    user.password = hash;

    Users.add(user)
      .then((user) => {
        res.status(201).json({ data: user });
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message,
        });
      });
  } else {
    res.status(400).json({
      message:
        "Please provide username, name, password and email to register user. Password should be alphanumerical",
    });
  }
});

module.exports = router;
