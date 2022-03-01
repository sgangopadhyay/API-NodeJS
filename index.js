const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017/patna";

// create a MongoDB database

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("MongoDB database has been created !");
});
