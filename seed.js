const mongoose = require("mongoose");
const db = require("./models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gameknight", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const userSeed = [
  {
    _id: 1,
    userName: "The Bat",
    ageRange: "13-18",
    bio:
      "Batman is a superhero who appears in American comic books published by DC Comics. Batman was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939.",
    email: "fakecake@email.com",
    password: "password",
    image: "https://www.fillmurray.com/200/300",
    location: "Atlanta",
  },
  {
    _id: 2,
    userName: "The Rat",
    ageRange: "13-18",
    bio:
      "Ratman is a superhero who appears in American comic books published by DC Comics. Batman was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939.",
    email: "fakecake@email.com",
    password: "password",
    image: "https://www.fillmurray.com/200/300",
    location: "Atlanta",
  },
  {
    _id: 3,
    userName: "The Cat",
    ageRange: "13-18",
    bio:
      "Catman is a superhero who appears in American comic books published by DC Comics. Batman was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939.",
    email: "fakecake@email.com",
    password: "password",
    image: "https://www.fillmurray.com/200/300",
    location: "Atlanta",
  },
  {
    _id: 4,
    userName: "The Hat",
    ageRange: "13-18",
    bio:
      "Hatman is a superhero who appears in American comic books published by DC Comics. Batman was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939.",
    email: "fakecake@email.com",
    password: "password",
    image: "https://www.fillmurray.com/200/300",
    location: "Atlanta",
  },
  {
    _id: 5,
    userName: "The Fat",
    ageRange: "13-18",
    bio:
      "Fatman is a superhero who appears in American comic books published by DC Comics. Batman was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939.",
    email: "fakecake@email.com",
    password: "password",
    image: "https://www.fillmurray.com/200/300",
    location: "Atlanta",
  },
];

const eventSeed = [
  {
    eventName: "Settlers of Catanaroo",
    date: Date.now(),
    gameCategory: "strategy",
    gameName: "Settlers of Catan",
    description: "sheep for wheat?",
    eventLink: "https://www.google.com",
    maxAttendees: 5,
    hostID: "1",
    attendees: [
      "2",
      "3",
      "4",
    ],
  },
  {
    eventName: "Archaniacs Unite",
    date: Date.now(),
    gameCategory: "Multiplayer RPG",
    gameName: "Legends of Archania",
    description: "Wert Wert Wert Wert Wert.",
    eventLink: "https://www.google.com",
    maxAttendees: 7,
    hostID: "1",
    attendees: [
      "2",
      "3",
      "4",
    ],
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
    db.Event.remove({})
      .then(() => db.Event.collection.insertMany(eventSeed))
      .then((data) => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch((err) => {
        console.error(err);
        process.exit(1);
      });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
