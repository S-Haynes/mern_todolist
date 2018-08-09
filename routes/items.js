const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Item = require("../models/Item");

// test route
router.post("/test", (req, res) => {
  res.json({ msg: "item route works" });
});

// create item route
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem
    .save()
    .then(item => {
      res.json(item);
    })
    .catch(err => console.log(err));
});

module.exports = router;
