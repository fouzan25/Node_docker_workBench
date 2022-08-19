require("dotenv").config();
const express = require("express");
const constants = require("./constants/config");
const mongoose = require("mongoose");
const app = express();
mongoose
  .connect(constants.url)
  .then(() => {
    console.log("connected");
    app.listen(constants.config.nodePort || 3000);
  })
  .catch((e) => console.log(e));
