require("dotenv").config();
const express = require("express");
const mongoConnect = require("./middleware/database");
const app = express();

mongoConnect()
  .then(console.log)
  .catch(console.error);
  // .finally((client) => client.close());
app.listen(process.env.NODE_DOCKER_PORT || 3000);
