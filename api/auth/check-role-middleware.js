module.exports = (role) => {
  return function () {
    if ((req?.decodedJWT?.role || "") === role) {
      //req...
      next();
    } else {
      res.status(403).json({ message: "restricted area" });
    }
  };
};
