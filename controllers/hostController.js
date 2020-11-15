const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const db = require("../models");

// LOAD EVENTS HOSTED EVENTS WHERE HOSTID = USERID PASSED INTO HEADERS
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
      db.Event.find({ hostID: { $eq: decoded.userId } })
        .populate(["attendees", "hostID"])
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

module.exports = router;
