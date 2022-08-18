const { MongoClient } = require("mongodb");
const dbConfig = require("../constants/db_config");

const url = "mongodb://".concat(
  dbConfig.user,
  ":",
  dbConfig.password,
  "@",
  dbConfig.host,
  ":",
  dbConfig.port,
  "/",
  dbConfig.dataBaseName,
  "?authSource=admin"
);

const client = new MongoClient(url);

async function connectMongoDB() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("documents");
  console.log(
    "🚀 ~ file: database.js ~ line 24 ~ connectMongoDB ~ collection",
    collection
  );

  return "done.";
}

module.exports = connectMongoDB;
