const mongoose = require("mongoose");
require("dotenv").config();
const userSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: [true, "name is a mandatory field."],
    minLength: [3, "Minimum length should be 3"],
  },
  email: {
    type: String,
    required: [true, "email is a mandatory field."],
    // maxLength: [20, "email field maximum length should be 20"],
  },
  password: {
    type: String,
    required: [true, "password is a mandatory field."],
    minLength: [6, "Password must be atleast 6 characters long."],
  },
  resetToken: { type: String },
  expireToken: Date,
});

// Model Creation
const User = mongoose.model("user", userSchema);
exports.User = User;

// 2022 - 03 - 14T08: 33: 53.489 + 00: 00
// 2022-03-14T07:38:11.513Z
