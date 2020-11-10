const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../models");

// GET ALL EVENTS - NO AUTHORIZATION NEEDED
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

// CREATE AN EVENT - MUST BE SIGNED IN AND USERID IS PASSED IN VIA HEADERS FOR HOST ID
router.post("/", (req, res) => {
  console.log(req.headers)
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
      db.Event.create({...req.body, hostID: decoded.userId})
        .then((NewEvent) => {
          res.json(NewEvent);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error: true,
            data: null,
            message: "Failed to add new event.",
          });
        });
    }
  });
});

// DELETE SELECTED EVENT - USER MUST BE LOGGED IN AND MATCH HOSTID

// EDIT SELECTED EVENT - USER MUST BE LOGGED IN AND MATCH HOSTID

module.exports = router;
