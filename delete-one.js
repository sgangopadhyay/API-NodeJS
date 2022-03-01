// USE MONGODB CLIENT

const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017/";

// delete one record

MongoClient.connect(url, function (err, db) {
  const db_1 = db.db("patna");
  const sql = { name: "Ravi" }; // search pattern for deletion of document

  db_1.collection("guvi").deleteOne(sql, function (err, result) {
    console.log("SUCCESS : Data deleted !");
    db.close();
  });
});
