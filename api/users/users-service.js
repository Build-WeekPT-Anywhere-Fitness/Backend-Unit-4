module.exports = {
  isValid,
};

function isValid(user) {
  return Boolean(user.username && user.email && user.name & user.password);
}
