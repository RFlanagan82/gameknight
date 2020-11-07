const express = require("express");

const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {

  db.Event.find({})
    .then((Events) => {
      res.json(Events);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Failed to retrieve all Events.",
      });
    });
  
});

module.exports = router;