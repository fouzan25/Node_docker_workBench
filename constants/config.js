require("dotenv").config();
const config = {
  user: process.env.MONGODB_USER,
  password: process.env.MONGODB_PASSWORD,
  host: process.env.MONGODB_HOST_NAME,
  mongoPort: process.env.MONGODB_DOCKER_PORT,
  dataBaseName: process.env.MONGODB_DATABASE,
  nodePort: process.env.NODE_DOCKER_PORT,
};

const url = "mongodb://".concat(
  config.user,
  ":",
  config.password,
  "@",
  config.host,
  ":",
  config.mongoPort,
  "/",
  config.dataBaseName,
  "?authSource=admin"
);

exports.url = url;
exports.config = config;
