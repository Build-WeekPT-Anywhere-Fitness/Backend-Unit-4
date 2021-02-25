require("dotenv").config();

const server = require("./api/server");

server.get("/", (req, res) => {
  res.status(200).json({ message: "it's working!" });
});
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
