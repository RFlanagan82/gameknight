const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: { type: String, trim: true, required: true },
  ageRange: { type: Number, required: true },
  bio: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
  image: { type: String, trim: true },
  location: { type: String, trim: true }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
