const express = require("express");

const router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
  db.User.create(req.body)
    .then((NewUser) => {
      res.json(NewUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Failed to add new user.",
      });
    });
});

module.exports = router;
