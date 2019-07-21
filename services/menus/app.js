const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
require('dotenv').config()

const routes = require("./routes/api");
const app = express();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());

  app.use('/api', routes)
  
  // DB Config
  const db = `mongodb://mongo:${process.env.MONGO_PORT}/menus`;

mongoose.connect(db, {
    "auth": { "authSource": "admin" },
    "user": process.env.MONGO_USER,
    "pass": process.env.MONGO_PASS,
    "useMongoClient": true
  })
  .then(() => console.log("MongoDB successfully connected to Menus"))
  .catch(err => console.log(err));

  const port = process.env.PORT || 6000;

app.listen(port, () => console.log(`Menus Service up and running on port ${port}`))