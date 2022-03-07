const mongoose = require("mongoose");
require("dotenv").config();
const userSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: [true, "name is a mandatory field."],
    minLength: [3, "name field minimum length should be 3"],
  },
  email: {
    type: String,
    required: [true, "email is a mandatory field."],
    // maxLength: [20, "email field maximum length should be 20"],
  },
  password: {
    type: String,
    required: [true, "password is a mandatory field."],
  },
});

// Model Creation
const User = mongoose.model("user", userSchema);
exports.User = User;
