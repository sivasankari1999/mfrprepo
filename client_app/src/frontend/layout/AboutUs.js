import React from "react";

import MultiplePizzas from "../../assets/masala.jpg" ;
import "./AboutUs.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
function AboutUs() {
  return (
    <>
    <Navbar/>
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>Welcome Back!</p>
        <p>
           Hi! you are  just 3-step away from your favourite food now,order food or dine-in at your favourite resturant.Our first priority is to deliver the hygienic food safely and carefully on your doorstep 24x7.Our services had been escalated in more than 15 states all over India and we also serve globally.We offer you the most delicious and hygienic food from your local area resturant as well as our top-rated resturants. we serve you Indian,Continental,Chinese,Thai, etc.. Our highly positively reviewed and top-rated dish is our authentic indian food with full of taste and now we are becoming India's topmost fastest delivery partners. 
        </p>
      </div>
      <div className="pt-5">
                <Footer></Footer>
            </div>
    </div>
    </>
  );
}

export default AboutUs;
