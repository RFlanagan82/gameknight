const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: { type: String, trim: true, required: true },
  ageRange: { type: String, required: true },
  bio: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
  image: { type: String, trim: true },
  city: { type: String, trim: true, required: true  },
  state: { type: String, trim: true, required: true  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
