const mongoose = require("mongoose");
require("dotenv").config();
const orderSchema = new mongoose.Schema({
      name: {
        type: String,
      },
      price: {
        type: String,
      },
      quantity:{
          type:  String
      }

});

// Model Creation
const Orders = mongoose.model("Orders", orderSchema);
exports.Orders = Orders;