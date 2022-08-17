const { MongoClient } = require("mongodb");
require("dotenv").config("../.env");

const url = process.env.Mongo_Address;
const client = new MongoClient(url);
const dbName = process.env.MOngo_DB_Name;

async function connectMongoDB() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("documents");
  return "done.";
}

module.exports = connectMongoDB;
