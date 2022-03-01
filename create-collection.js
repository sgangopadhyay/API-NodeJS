// CREATE COLLECTION USING MONGODB CLIENT
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017/";



// create a collection

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  const db_1 = db.db("patna");
  db_1.createCollection("guvi", function (err, res) {
    if (err) throw err;
    console.log("MongoDB collection created!");
    db.close();
  });
});
