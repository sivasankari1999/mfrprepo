var express = require("express");
var mongoose = require("mongoose");
var session = require("express-session");
var nodemailer = require("nodemailer");
const Razorpay = require("razorpay");
var crypto = require("crypto");
var cors = require("cors");
var app = express();
require("dotenv").config();
app.use(express.json());
app.use(
  session({
    secret: "nothing",
  })
);
app.use(cors());


const port = 5000;
const uri = process.env.CONNECTION_STRING;
app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});
app.use(require("./routes/mfrpRoutes.js"));
mongoose
  .connect(uri)
  .then(() => console.log("Mongodb connection is established successfully"))
  .catch((error) => console.error("Mongodb connection failed:", error.message));
