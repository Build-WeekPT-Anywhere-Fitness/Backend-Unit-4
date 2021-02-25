const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

const Users = require("../users/users-model");
const { isValid } = require("../users/users-service");

router.post("/register", async (req, res) => {
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

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  //fix isValid function and insert here in conditional statement

  if (req.body) {
    Users.findBy({ username: username })
      .then(([user]) => {
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({
            message: `${user.username} successfully logged in`,
            token,
          });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  } else {
    res.status(400).json({ message: "Please provide a username and password" });
  }
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    //need to add role
  };
  const secret = secrets.jwtSecret;
  const options = {
    expiresIn: "1hr",
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
