const mongoose = require("mongoose");
require("dotenv").config();
const cartSchema = new mongoose.Schema({
      name: {
        type: String,
      },
      price: {
        type: String,
      },
      image_path :{
          type: String,
      },
      quantity:{
          type:  String
      }

});

// Model Creation
const Cart = mongoose.model("cart", cartSchema);
exports.Cart = Cart;