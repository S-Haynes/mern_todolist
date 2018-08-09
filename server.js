const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const app = express();

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect to db
mongoose
  .connect(
    keys.mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(err => {
    console.log(err);
  });

// serve port

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
  console.log("Server started on port " + port);
});
