const mongoose = require("mongoose");
require("dotenv").config();
const myordersSchema = new mongoose.Schema({
      name: {
        type: String,
      },
      price: {
        type: String,
      },
      quantity:{
          type:  String
      },
    //   userId:{   
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'User',
    //     required:true
    // },
    // FoodItems:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'FoodItems',
    //     required:true
    // }

});

// Model Creation
const MyOrders = mongoose.model("orders", myordersSchema);
exports.MyOrders = MyOrders;