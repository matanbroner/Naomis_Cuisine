
const app = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config()

const { authorize } = require('./resources/middleware/authorize')

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());

  // DB Config
const db = `mongodb://mongo:${process.env.MONGO_PORT}/users`;

// Connect to MongoDB
mongoose.connect(db, {
    "auth": { "authSource": "admin" },
    "user": process.env.MONGO_USER,
    "pass": process.env.MONGO_PASS,
    "useMongoClient": true
  })
  .then(() => console.log("MongoDB successfully connected to Queries"))
  .catch(err => console.log(err));


app.use((req, res, next) => {
authorize(req, res)
res.locals.returnStatus = (response, code, body, appendedParameters={}) => {
    let param
    if (code >= 200 && code <= 300) {
        param = 'content'
    } else {
        param = 'err'
    }
    
    response.status(code)
        .json({
            status: code,
            [param]: body,
            source: req.originalUrl,
            ...appendedParameters
        })
        .end()
}
next()
})


// Main routes
app.use("/api", require('./routes/api'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Queries Service up and running on port ${port}`))