import React from "react";
import { Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

//import AliceCarousel from 'react-alice-carousel';
import Slider from "./components/Slider/Slider";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Slider />
        <div className=" py-4 row">
          <div className="card2 py-2  col-sm-12 col-md-12 col-xs-12 col-lg-6 px-2">
            <h3 className="mt-2 cheftitle" >
              Our Chef{" "}
              <span>
                {" "}
                <img
                  src={require("../../../assets/img/chef.jfif")}
                  alt=""
                  className="img1"
                />
              </span>
            </h3>

            <h5 className="content mt-4 mx-3">
              With 20 years of experience cooking in the finest restaurants, our
              chef is excited to present their vision to you and all our guests.
              Our caring and committed staff make sure you have a fantastic
              experience with us.
            </h5>
          </div>
          <div className="card2 py-2 col-sm-12 col-md-12 col-xs-12 col-lg-6 px-2">
            <h3 className="seasonal">
              Seasonal and Local{" "}
              <span>
                {" "}
                <img
                  src={require("../../../assets/img/seasonal.jpg")}
                  alt=""
                  className="img1"
                />
              </span>
            </h3>
            <br />
            <h5 className="content">
              We refuse to compromise on quality in our restaurant. That's why
              we source our fresh ingredients from local farmers' markets. No
              matter what time of year, you can be sure you're eating the best
              of the season.Indian Restaurant
            </h5>
          </div>
        </div>

        <div className="pt-3 pb-5 align-items-centre justify-content-center">
          <h3 className="bestdelivery">
            The Best Delivery{" "}
            <span>
              {" "}
              <img
                src={require("../../../assets/img/delivery.jfif")}
                alt=""
                className="img1"
              />
            </span>
          </h3>
          <h5 className="content">
            We have worked to package our meals in a way that lets you bring the
            quality of our meals into your home. Bringing the Best Meals to Your
            doorstep{" "}
          </h5>
        </div>
        <div className="pt-3">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
