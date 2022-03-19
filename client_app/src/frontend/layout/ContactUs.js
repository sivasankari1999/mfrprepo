import React from "react";
import PizzaLeft from "../../assets/img/foods.jpg";
import "./ContactUs.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

function ContactUs() {
  return (
    <>
    <Navbar/>
      <div className="contact">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${PizzaLeft})` }}
        ></div>
        <div className="rightSide">
          <h1> Contact Us</h1>

          <form id="contact-form" method="POST">
            <label >Full Name</label>
            <input name="name" placeholder="Enter full name..." type="text" />
            <label>Email</label>
            <input name="email" placeholder="Enter email..." type="email" />
            <label>Message</label>
            <textarea
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
            ></textarea>
            <button type="submit"> Send Message</button>
          </form>
        </div>

      </div>
      <div className="pt-5">
        <Footer></Footer>
      </div>
    </>
  );
}

export default ContactUs;
