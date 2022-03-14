import React from "react";
import { Link } from "react-router-dom";
import "./LoginSignup.css";
import { useNavigate } from "react-router";
import Header from "./Header";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function Forgotpassword() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errormsg, setErrormsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const resetLinkHandler = (e) => {
    alert("Clicked");
    e.preventDefault();
    console.log("email: ", email);
    const url = "http://localhost:5000/reset-link";
    axios
      .post(url, { email })
      .then((res) => {
        console.log("res.data: ", res.data);
        setErrormsg("");
        setSuccessMsg(res.data.message);
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
        });
        navigate("/login");
        //localStorage.setItem(res.data.token)
        // navigate("/home");
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          console.log("err.response: ", err.response);
          console.log("err.response.ok: ", err.response.ok);
          console.log("err.response.data: ", err.response.data);
          setSuccessMsg("");
          setErrormsg(err.response.data.message);
          console.log(errormsg);
        }
      });
    setEmail("");
  };
  return (
    <div>
      <Header></Header>
      <div className="backdrop" onClick={() => navigate("/")}></div>

      <div className="login-card" style={{ width: "22rem" }}>
        <div className="login-header mb-3">
          <h3>Forgot Password?</h3>

          <span onClick={() => navigate("/")}>&#10005;</span>
        </div>
        <div>
          <h6>Forgot Your Password?😟</h6>
          <p>
            That's ok...
            <br />
            Just enter the email address you've used to register with us and
            we'll send you the reset link to reset your password
          </p>
        </div>
        <form onSubmit={resetLinkHandler}>
          <div>
            <input
              className="mt-2"
              style={{ width: "18rem", height: "2.5rem" }}
              type="email"
              name="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            ></input>
            <div className="text-danger signup_err">
              <p className="m-0 ">{errormsg}</p>
            </div>
            {/* {successMsg && (
              <div className="text-success signup_err">
                <p className="m-0 ">{successMsg}</p>
              </div>
            )} */}
          </div>
          <div>
            <button className="btn btn-danger m-3" style={{ width: "7rem" }}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forgotpassword;
