const app = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config()

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());

  // DB Config
const db = `mongodb://mongo:${process.env.MONGO_PORT}/frontend`;

// Connect to MongoDB
mongoose.connect(db, {
    "auth": { "authSource": "admin" },
    "user": process.env.MONGO_USER,
    "pass": process.env.MONGO_PASS,
    "useMongoClient": true
  })
  .then(() => console.log("MongoDB successfully connected to Orders"))
  .catch(err => console.log(err));


// Main routes
app.use("/api", require('./routes/pages'));


const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Frontend Content Service up and running on port ${port}`))