import React from "react";
import { Link } from "react-router-dom";
import "./LoginSignup.css";
import { useNavigate } from "react-router";
import Header from "./Header";
import { useState } from "react";
import axios from "axios";

function Login() {
  let navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errormsg, setErrormsg] = useState("");

  const changeHandler = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/login";
    axios
      .post(url, data)
      .then((res) => {
        console.log("res.data: ", res.data.data);
        let pwd = res.data.data;
        if(pwd=="Admin$1234")
        {
          navigate("/Admin")
        }
        else{
          navigate("/home");
        }
        
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          console.log("err.response: ", err.response);
          console.log("err.response.ok: ", err.response.ok);
          console.log("err.response.data: ", err.response.data);
          setErrormsg(err.response.data.message);
          console.log(errormsg);
        }
      });
   
    setErrormsg("");
  };
  return (
    <div>
      <Header></Header>
      <div className="backdrop" onClick={() => navigate("/")}></div>

      <div className="login-card" >
        <div className="login-header ">
          <h3>Log in</h3>
          <span onClick={() => navigate("/")}>&#10005;</span>
        </div>
        <form onSubmit={loginSubmitHandler}>
          <div>
            <input
              className="input-field m-3"
              type="email"
              name="email"
              value={data.email}
              onChange={changeHandler}
              placeholder="Email Address"
            ></input>
          </div>
          <div>
            <input
              className="input-field m-3"
              type="password"
              name="password"
              value={data.password}
              onChange={changeHandler}
              placeholder="Password"
            ></input>
          </div>
          <div className="text-danger">
            <p className="m-0">{errormsg}</p>
          </div>
          <div>
            <Link to="/forgotpassword">Forgot Password?</Link>
          </div>
          <div>
            <button className="btn btn-danger m-3" style={{ width: "13rem" }}>
              Sign in
            </button>
          </div>
        </form>
        <div className="m-3">
          New to Curry Kitchen?
          <Link to="/signup">Create account</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
