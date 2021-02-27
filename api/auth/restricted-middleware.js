const jwt = require("jsonwebtoken");

const secret = require("../config/secrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "token invalid" });
      } else {
        req.token = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "token required" });
  }
};