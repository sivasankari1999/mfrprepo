var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
const Razorpay = require("razorpay");
var crypto = require("crypto");
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "yogapriya6768@gmail.com",
        pass: "kgkxvqwavzjpnfsu",
    },
});

const { User } = require("../models/users");
const { FoodItems } = require("../models/FoodItems");
const { Cart } = require("../models/cart");
const { Orders } = require("../models/Orders");

const { log } = require("console");
// const connection_string = process.env.CONNECTION_STRING;
// let AdminUsermail = "AdminCurry@gmail.com";
// let AdminUserpwd = "Admin$1234";
router.post("/signup", async (req, res) => {
    let { body, headers, session } = req;
    console.log("body: ", body);
    console.log("headers:", headers);
    console.log("session:", session);
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

router.post("/login", async (req, res) => {
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
            res.send({
                status: "success",
                message: "Login is completed sucessfully",
                data: body.password
            });
        } else {
            console.log("NOT MATCHED");
            return res.status(400).send({ message: "Invalid Credentials!" });
        }
    } else {
        console.log("EMIAL NOT EXISTS");
        return res.status(400).send({ message: "User not found!" });
    }
});

router.post("/reset-link", async (req, res) => {
    let { body } = req;
    console.log("body: ", body);
    if (body.email === "") {
        return res.status(400).send({ message: "Enter your email address!" });
    }
   

    User.findOne({ email: req.body.email }).then((user) => {
        if (!user) {
            return res
                .status(400)
                .send({ message: "User dont exists with that email" });
        }
        let token = Math.round(Math.random() * 1000000);
        user.resetToken = token;
      
        user.expireToken = Date.now() + 3600000;
        console.log(
            "user.expireToken: ",
            user.expireToken
           
        );

        var mailOptions = {
            from: "yogapriya6768@gmail.com",
            to: "sankarisivasankari05@gmail.com",
            subject: "Reset Password",
            html: `<h4>
                Hi ${user.FullName},
               </h4>
              <p>
              We're sending you this email because you requested a password reset. Click this
              <a href="http://localhost:3000/reset/${token}">link</a> to create a new password.
              </p>
              <br/>
              <p>
                If you didn't request a password reset, you can ignore this email.
                Your password will not be changed.
              </p>
              <br/>
              <br/>
              <h5>Regards,</h5>
              <h4>Curry Kitchen Team</h4>
              `,
        };

        user.save().then((result) => {
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Email sent: " + info.response);
                }
            });
            return res.send({
                status: "success",
                message: "Reset Link has been sent to your email",
            });
        });
    });
});

router.post("/new-password", (req, res) => {
    let { body } = req;
    console.log("body : ", body);

    const newPassword = req.body.newPassword;
    const confirmPassword = req.body.confirmPassword;
    const sentToken = req.body.token;
  
    console.log("new Date(): ", new Date());

    User.findOne({
        resetToken: sentToken,
        expireToken: { $gt: Date.now() },
    })
        .then((user) => {
            console.log(user);
            if (!user) {
                return res.status(400).send({ message: "Try again session expired" });
            }
            if (user) {
                if (newPassword === "" || confirmPassword === "") {
                    return res.status(400).send({ message: "Must Enter all the fields" });
                } else if (newPassword !== confirmPassword) {
                    return res.status(400).send({ message: "Password doesnot match" });
                } else if (newPassword === user.password) {
                    return res.status(400).send({
                        message: "Must be different from the old password ",
                    });
                } else {
                    user.password = newPassword;
                    user.save(function (err, result) {
                        if (err) {
                            console.log("err :", err.message);
                            return res.status(400).send(err.message);
                        }
                        return res.send({
                            status: "success",
                            message: "Password changed successfully",
                        });
                    });
                }
            }
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get("/OrderOnline", async (req, res) => {
    const { body } = req;
    console.log("body:", body);
    const foodList = await FoodItems.find({}, { _id: 0 });
    console.log("foodlist:", foodList);
    res.send({ foodList });
});
router.get("/users", async (req, res) => {
    const { body } = req;
    console.log("body:", body);
    const UserList = await User.find({}, { _id: 0 });
    console.log("UserList:", UserList);
    res.send({ UserList });
});
router.post("/deletefood/OrderOnline", async (req, res) => {
    let { body } = req;
    console.log("body:", body);
    const foodList = await FoodItems.deleteOne({ name: body.name });
    console.log("foodList:", foodList);
    res.send({ status: "suceess", message: "Item has been deleted" });
})
router.post("/addFood/OrderOnline", async (req, res) => {
    let { body } = req;
    console.log("body:", body);
    const foodExist = await FoodItems.findOne({ name: body.name });
    console.log("foodExist: ", foodExist);
    if (foodExist) {
        return res
            .status(400)
            .send({ message: "This item is already added in cart" });
    }
    if (!foodExist) {
        let doc = new FoodItems(body);
        doc.save(function (err, result) {
            if (err) {
                console.log("err :", err.message);
                return res.status(400).send(err.message);
            }
            return res.send({ status: "success", message: "Added to the OrderOnline" });
        });
    }
})
router.put("/editFood/OrderOnline", async (req, res) => {
    let { body } = req;
    console.log("body:", body);

    const foodList = FoodItems.updateOne({ name: body.name }, body).exec(function (err, result) {
        if (err) return res.status(400).send(err.message);
        console.log("foodList:", foodList);
        return res.send({ status: "success", message: "Item is updated" });
    })
})
router.post("/cart", async (req, res) => {
    const { body } = req;
    console.log("body:", body);
    const foodExist = await Cart.findOne({ name: body.name });
    console.log("foodExist: ", foodExist);

    if (foodExist) {
        return res
            .status(400)
            .send({ message: "This item is already added in cart" });
    }
    if (!foodExist) {
        let doc = new Cart();
        doc.name = body.name;
        doc.price = body.price;
        doc.image_path = body.image_path;
        doc.quantity = body.quantity;
        doc.save(function (err, result) {
            if (err) {
                console.log("err :", err.message);
                return res.status(400).send(err.message);
            }
            return res.send({ status: "success", message: "Added to the cart" });
        });
    }

});
router.get("/cart", async (req, res) => {
    const cartList = await Cart.find({}, { _id: 0 });
    console.log("cartList:", cartList);
    res.send({ status: "success", message: "Cart is done", cartList });
})
router.delete("/cart", async (req, res) => {
    const cartList = await Cart.remove({});
    res.send({ status: "success", message: "Cart is cleared", cartList });
})
router.put("/addquantity/cart", async (req, res) => {
    let { body } = req;
    console.log("body:", body);
    let query = { name: body.food.name }
    body.food.quantity = body.quantity
    Cart.updateOne({ name: body.food.name }, body.food).exec(function (err, result) {
        if (err) return res.status(400).send(err.message);
        return res.send({ status: "success" });
    })
})
router.put("/subquantity/cart", async (req, res) => {
    let { body } = req;
    console.log("body:", body);
    let query = { name: body.food.name }
    body.food.quantity = body.quantity
    Cart.updateOne({ name: body.food.name }, body.food).exec(function (err, result) {
        if (err) return res.status(400).send(err.message);
        return res.send({ status: "success" });
    })
})
router.post("/removefood/cart", async (req, res) => {
    let { body } = req;
    console.log("body:", body);
    const cartList = await Cart.deleteOne({ name: body.name });
    console.log("cartList:", cartList);
    res.send({ status: "suceess" });
})
router.post("/admin/orders", async (req, res) => {
    let { body } = req;
    console.log("body:", body);
    const orderList = await Orders.insertMany(body)
        .then(function () {
            console.log("Data inserted") // Success
        })
        .catch(function (error) {
            console.log(error)     // Failure
        });
    console.log("orderList:", orderList);
    res.send({ status: "suceess", message: "Added to the orders" });
})
router.get("/admin/orders", async (req, res) => {
    let { body } = req;
    const orderList = await Orders.find({});
    console.log("orderList:", orderList);
    res.send({ status: "suceess", data: orderList });
})
router.post("/orders", async (req, res) => {

    try {
        const instance = new Razorpay({
            key_id: process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET,
        });

        const options = {
            amount: req.body.amount * 100,
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
        };

        instance.orders.create(options, (error, order) => {
            if (error) {
                console.log(error);
                return res.status(500).json({ message: "Something Went Wrong!" });
            }
            res.status(200).send({ data: order });
        });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error!" });
        console.log(error);
    }
});

router.post("/verify", async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            req.body;
        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac("sha256", process.env.KEY_SECRET)
            .update(sign.toString())
            .digest("hex");

        if (razorpay_signature === expectedSign) {
            return res.status(200).send({ message: "Payment verified successfully" });
        } else {
            return res.status(400).send({ message: "Invalid signature sent!" });
        }
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error!" });
        console.log(error);
    }
});

router.post("/logout", function (req, res) {
    const { body, session } = req;

    console.log("requested path: ", req.url);
    console.log("session: ", session);
    delete session.user;
    res.send({ message: "Logged out " });
});
module.exports = router;