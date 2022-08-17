const express = require("express");
const mongoConnect = require("./middleware/database");
const app = express();

mongoConnect()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
