const mongoose = require("mongoose");
require("dotenv").config();
const fooditemSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
  image :{
      type: String,
  }
});

// Model Creation
const FoodItems = mongoose.model("fooditem", fooditemSchema);
exports.FoodItems = FoodItems;
