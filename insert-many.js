// USE MONGODB CLIENT
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017/";

const data = [
  {
    name: "Priya",
    location: "Assam",
  },
  {
    name: "Nitin",
    location: "New Delhi",
  },
  {
    name: "Ravi",
    location: "Lucknow",
  },
];

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  const db_1 = db.db("patna");
    // inserting multiple data's in the collection
  db_1.collection("guvi").insertMany(data, function (err, res) {
    if (err) throw err;
    console.log("SUCCESS : Multiple Data inserted successfully");
    db.close();
  });
});
