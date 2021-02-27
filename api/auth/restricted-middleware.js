const jwt = require("jsonwebtoken");

const secret = require("../config/secrets");

module.exports = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "token invalid" });
        console.log(err);
      } else {
        req.decodedJWT = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "token required" });
  }
};
