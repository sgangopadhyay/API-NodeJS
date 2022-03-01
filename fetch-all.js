// USE MONGODB CLIENT

const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  const db_1 = db.db("patna"); // database from which I am fetching the data
  db_1
    .collection("guvi")
    .find({})
    .toArray(function (err, result) {
      console.log(result);
      db.close();
    });
});
