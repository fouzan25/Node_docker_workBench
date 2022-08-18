const { MongoClient } = require("mongodb");
require("dotenv").config();

const url = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.DB_HOST}:${process.env.MONGODB_DOCKER_PORT}/${process.env.MONGODB_DATABASE}?authSource=admin`
const client = new MongoClient(url);
const dbName = process.env.DB_NAME;

async function connectMongoDB() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("documents");
  return "done.";
}

module.exports = connectMongoDB;
