const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes/api");
const app = express();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());
  
  // DB Config
  const db = `mongodb://mongo:${process.env.MONGO_PORT}/users`;

mongoose.connect(db, {
    "auth": { "authSource": "admin" },
    "user": process.env.MONGO_USER,
    "pass": process.env.MONGO_PASS,
    "useMongoClient": true
  })
  .then(() => console.log("MongoDB successfully connected to Users"))
  .catch(err => console.log(err));

  const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Users Service up and running on port ${port}`))