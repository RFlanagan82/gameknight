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
        // console.log(err);
        return res.status(401).json({
          error: true,
          data: null,
          message: "Invalid token.",
        });
      } else {
        db.Event.find({attendees: decoded.userId})
        .populate(["hostID", "attendees"])
        .then((Events) => {
          res.json(Events);

        })
        .catch((err) => {
          // console.log(err);
          res.status(500).json({
            error: true,
            data: null,
            message: "Failed to retrieve all Events.",
          });
        });
      }
    });
});

// UPDATE TO ADD USER TO ATTENDEE ARRAY - ADD USERID OF LOGGED IN USER
    router.put("/add/:id", (req, res) => {
      if (!req.headers.authorization) {
        return res.status(401).json({
          error: true,
          data: null,
          message: "Unauthorized",
        });
      }
      jwt.verify(req.headers.authorization, process.env.SECRET, (err, decoded) => {
        if (err) {
          // console.log(err);
          return res.status(401).json({
            error: true,
            data: null,
            message: "Invalid token.",
          });
        } else {
          // console.log(decoded);
          // include the db.Event.whatever here
          db.Event.findByIdAndUpdate(req.params.id, {$push: {attendees: decoded.userId}})
          .then((updatedEvent) => {
            res.json(updatedEvent)
          })
          .catch((err) => {
            // console.log(err);
            res.status(500).json({
              error: true,
              data: null,
              message: "Failed to update event.",
            });
          });
        }
      });
    });


// UPDATE TO REMOVE USER FROM ATTENDEE ARRAY - REMOVE USERID OF LOGGED IN USER
router.put("/remove/:id", (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      error: true,
      data: null,
      message: "Unauthorized",
    });
  }
  jwt.verify(req.headers.authorization, process.env.SECRET, (err, decoded) => {
    if (err) {
      // console.log(err);
      return res.status(401).json({
        error: true,
        data: null,
        message: "Invalid token.",
      });
    } else {
      // console.log(decoded);
      db.Event.findByIdAndUpdate(req.params.id, {$pull: {attendees: decoded.userId}})
      .then((updatedEvent) => {
        res.json(updatedEvent)
      })
      .catch((err) => {
        // console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Failed to update event.",
        });
      });
    }
  });
});


module.exports = router;