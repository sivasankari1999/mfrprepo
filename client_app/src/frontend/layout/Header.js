import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "../layout/Header.css";
import Login from "./Login.js";
import Signup from "./Signup";

export default function Header() {
  let navigate = useNavigate();
  const [loginCard, setloginCard] = useState(false);

  function getstartHandler() {
    setloginCard(true);
  }
  function logincloseHandler() {
    // alert("clicked");
    setloginCard(false);
  }

  return (
    <div>
      {/* <Router> */}
      <div className="header">
        <h1>Curry Kitchen</h1>
      </div>
      <div className="main-image">
        <img src={require("../../assets/img-bg.jpg")}></img>

        <div className="centred">
          Join us to feed your hunger.
          <br />
          Order now and get tasty <br />
          restaurant like food at your home.
        </div>
        <div>
          <button
            className="btn1"
            onClick={() => {
              navigate("/login");
            }}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes> */}
      {/* </Router> */}
    </div>
  );
}
