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

// delete item route
router.delete("/:id", (req, res) => {
  Item.findByIdAndRemove(req.params.id)
    .then(item => {
      res.json({ success: true });
    })
    .catch(err => {
      console.log(err);
    });
});

// item show route
router.get("/", (req, res) => {
  Item.find({})
    .then(items => {
      res.json(items);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
