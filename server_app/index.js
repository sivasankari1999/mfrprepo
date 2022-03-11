var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session')
var cors = require("cors");
var app = express();
require("dotenv").config()
app.use(express.json());
app.use(session({
  secret: "nothing"
}))
app.use(cors());
const {User} = require("./models/users");
const {FoodItems} = require("./models/FoodItems");
const connection_string = process.env.CONNECTION_STRING;
app.post("/signup", async (req, res) => {
    let { body,headers,session } = req;
    console.log("body: ", body);
    console.log("headers:",headers);
    console.log("session:",session);
    session.user = body.email;
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
        return res.send({ status: "success"});
      });
    }
  });
  
  app.post("/login", async (req, res) => {
    let { body,session,headers } = req;
    console.log("body: ", body);
    console.log("headers:",headers);
    console.log("session:",session);
    session.user = body.email;
    console.log(session.user);
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
        res.send({status:"success",message:"Login is completed sucessfully"});
      } else {
        console.log("NOT MATCHED");
        return res.status(400).send({ message: "Invalid Credentials!" });
      }
    } else {
      console.log("EMIAL NOT EXISTS");
      return res.status(400).send({ message: "User not found!" });
    }
  });
  app.get("/OrderOnline",async (req,res)=>{
    const { body } = req;
    console.log("body:",body);
    const foodList = await FoodItems.find({},{_id:0});
    console.log("foodlist:",foodList);
    res.send({foodList});
  })
  app.get("/cart",async (req,res)=>{
    const { body } = req;
    console.log("body:",body);
    res.send({status:"success",message:"Cart is done"});
  })
  app.post("/logout", function (req, res) {
    const { body, session } = req;
    
    console.log("requested path: ", req.url);
    console.log("session: ", session);
    delete session.user;
    res.send({message:"Logged out "});
})
  const port = 5000;
  const uri = process.env.CONNECTION_STRING;
  app.listen(port, () => {
    console.log(`Server running on port: ${port}...`);
  });

mongoose.connect(uri)
.then (()=>console.log("Mongodb connection is established successfully"))
.catch((error)=>console.error("Mongodb connection failed:",error.message))