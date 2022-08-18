require("dotenv").config();
const config = {
  user: process.env.MONGODB_USER,
  password: process.env.MONGODB_PASSWORD,
  host: process.env.MONGODB_HOST_NAME,
  port: process.env.MONGODB_DOCKER_PORT,
  dataBaseName: process.env.MONGODB_DATABASE,
};

module.exports = config;
