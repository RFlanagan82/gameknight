const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../models");

  // LOAD ATTENDING EVENTS WHERE USERID IS INCLUDED IN THE ATTENDEES ARRAY
router.get("/", (req, res) => {
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
        db.Event.find({attendees: decoded.userId})
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
      }
    });
});

// UPDATE TO ADD USER TO ATTENDEE ARRAY - REMOVE USERID OF LOGGED IN USER

// UPDATE TO REMOVE USER FROM ATTENDEE ARRAY - REMOVE USERID OF LOGGED IN USER

module.exports = router;