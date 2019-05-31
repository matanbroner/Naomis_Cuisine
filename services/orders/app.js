const app = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
require('dotenv').config()

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());

  // DB Config
const db = `mongodb://mongo:${process.env.MONGO_PORT}/orders`;

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
app.use("/api", require('./routes/main'));


const port = process.env.PORT || 6500;

app.listen(port, () => console.log(`Orders Service up and running on port ${port}`))