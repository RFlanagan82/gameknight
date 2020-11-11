const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../models");

// GET USER INFO FOR LOGGED IN USER
router.get("/dashboard", (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      error: true,
      data: null,
      message: "Unauthorized",
    });
  }
  jwt.verify(req.headers.authorization, process.env.SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).json({
        error: true,
        data: null,
        message: "Invalid token.",
      });
    } else {
      console.log(decoded);
      db.User.findById(decoded.userId)
        .then((user) => {
          res.json(user);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error: true,
            data: null,
            message: "Could not retrieve user information.",
          });
        });
    }
  });
});
// EDIT USER - MAKE CHANGES TO LOGGED IN USER
router.put("/", (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      error: true,
      data: null,
      message: "Unauthorized",
    });
  }
  jwt.verify(req.headers.authorization, process.env.SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).json({
        error: true,
        data: null,
        message: "Invalid token.",
      });
    } else {
      console.log(decoded);
      db.User.findByIdAndUpdate(decoded.userId, req.body)
        .then((user) => {
          res.json(user);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error: true,
            data: null,
            message: "Could not update user.",
          });
        });
    }
  });
});


module.exports = router;
