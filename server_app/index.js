var express = require('express');
var mongoose = require('mongoose');
var cors = require("cors");
var app = express();
require("dotenv").config()
app.use(express.json());
app.use(cors());
const {User} = require("./models/users");
const connection_string = process.env.CONNECTION_STRING;

app.post("/signup", async (req, res) => {
    let { body } = req;
    console.log("body: ", body);
    console.log("=================");
    const userExist = await User.findOne({ email: body.email });
    console.log("userExist: ", userExist);
  
    if (userExist) {
      return res
        .status(400)
        .send({ message: "User with given email already Exist!" });
    }
    if (!userExist) {
      let newuser = body;
      let doc = new User(newuser);
      doc.save(function (err, result) {
        if (err) {
          console.log("err :", err.message);
          return res.status(400).send(err.message);
        }
        return res.send({ status: "success" });
      });
    }
  });
  
  app.post("/login", async (req, res) => {
    let { body } = req;
    console.log("body: ", body);
    const userExist = await User.find({ email: body.email });
    if (body.email === "" || body.password === "") {
      return res.status(400).send({ message: "Must enter all the fields!" });
    }
    if (userExist.length === 1) {
      console.log("userExist :", userExist);
      console.log("body.password: ", body.password);
      console.log("userExist.password :", userExist[0].password);
      if (userExist[0].password.trim() === body.password.trim()) {
        console.log("MATCHED");
        return res.send({ message: "Logged in!" });
      } else {
        console.log("NOT MATCHED");
        return res.status(400).send({ message: "Invalid Credentials!" });
      }
    } else {
      console.log("EMIAL NOT EXISTS");
      return res.status(400).send({ message: "User not found!" });
    }
  });
  const port = 5000;
  const uri = process.env.CONNECTION_STRING;
  app.listen(port, () => {
    console.log(`Server running on port: ${port}...`);
  });

mongoose.connect(uri)
.then (()=>console.log("Mongodb connection is established successfully"))
.catch((error)=>console.error("Mongodb connection failed:",error.message))