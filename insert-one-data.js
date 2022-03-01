// USE THE MONGODB CLIENT
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1:27017/";

// insert documents inside your collection

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  // name of the mongodb database
  const db_1 = db.db("patna");
  // data to be inserted 
  const data = { name: "Suman Gangopadhyay", location: "Bangalore" };
  // inserting the data into the collection of the MongoDB database
  db_1.collection("guvi").insertOne(data, function (err, res) {
    if (err) throw err;
    console.log("SUCCESS : Data inserted sussessfully");
    db.close();
  });
});
