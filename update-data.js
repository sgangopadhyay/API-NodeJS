// USE MONGODB CLIENT

const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017/";

// update the data

MongoClient.connect(url, function (err, db) {
  const db_1 = db.db("patna");

  const sql = { name: "Nitin" };

  const updated_data = {$set :{location: "Bangalore"} };

  db_1.collection("guvi").updateOne(sql, updated_data, function (err, res) {
    console.log("SUCCESS : Data updated successfully !");
    db.close();
  });
});
