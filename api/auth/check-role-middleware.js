module.exports = (role) => {
  return function () {
    let isInstructor;
    if (role === true) {
      isInstructor = "instructor";
    } else {
      isInstructor = "client";
    }
    if ((req?.decodedJWT?.instructor || "") === role) {
      next();
    } else {
      res.status(403).json({ message: "restricted area" });
    }
  };
};
