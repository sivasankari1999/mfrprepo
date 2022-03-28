import React from "react";
import { Link } from "react-router-dom";
import "./LoginSignup.css";
import { useNavigate, useParams } from "react-router";
import Header from "./Header";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function Resetpassword() {
  let navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errormsg, setErrormsg] = useState("");
  const [newPassworderr, setNewPassworderr] = useState("");

  const { token } = useParams();
  console.log(token);

  const resetPasswordHandler = (e) => {
    // alert("Clicked");
    e.preventDefault();

    const url = "http://localhost:5000/new-password";
    axios
      .post(url, { newPassword, confirmPassword, token })
      .then((res) => {
        console.log("res.data: ", res.data);
        setErrormsg("");
        toast.success(res.data.message + `. Login now!🎊`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
        });
        navigate("/login");
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          console.log("err.response: ", err.response);
          console.log("err.response.ok: ", err.response.ok);
          console.log("err.response.data: ", err.response.data);
          setErrormsg(err.response.data.message);
        }
        let errMessages = err.response.data;
        if (errMessages) {
          console.log("errMessages: ", errMessages);
          errMessages = errMessages.substring(errMessages.indexOf(":") + 1);
          errMessages = errMessages.trim();
          errMessages = errMessages.split(",");
          console.log(errMessages);

          errMessages.forEach((errMessage) => {
            console.log(errMessage);
            if (errMessage.includes("password")) {
              setNewPassworderr(errMessage.split(":")[1].trim());
            }
          });
        }
      });
    setNewPassword("");
    setConfirmPassword("");
  };
  return (
    <div>
      <Header></Header>
      <div className="backdrop" onClick={() => navigate("/")}></div>

      <div className="login-card" style={{ width: "22rem" }}>
        <div className="login-header mb-3">
          <h3>Reset Password?</h3>

          <span onClick={() => navigate("/")}>&#10005;</span>
        </div>
        <div>
          <h6>Create new Password</h6>
          <p>
            Your new password must be different from previous used password.
          </p>
        </div>
        <form onSubmit={resetPasswordHandler}>
          <div>
            <input
              className="mt-3"
              style={{ width: "18rem", height: "2.5rem" }}
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            ></input>

            <input
              className="mt-3"
              style={{ width: "18rem", height: "2.5rem" }}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
            {newPassworderr && (
              <div className="text-danger signup_err">
                <p className="m-0 ">{newPassworderr}</p>
              </div>
            )}
            <div className="text-danger signup_err">
              <p className="m-0 ">{errormsg}</p>
            </div>
          </div>
          <div>
            <button
              className="btn resetpswd-btn btn-danger m-3"
              style={{ width: "9rem" }}
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Resetpassword;
