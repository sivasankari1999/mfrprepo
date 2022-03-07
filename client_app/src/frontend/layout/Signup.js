import "./Signup.css";
import { useNavigate } from "react-router";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Signup(props) {
  let navigate = useNavigate();
  const [data, setData] = useState({
    FullName: "",
    email: "",
    password: "",
  });
  const [errorMsg, seterrorMsg] = useState("");
  let [fullNameErr, setfullNameErr] = useState("");
  let [emailErr, setEmailErr] = useState("");
  let [passwordErr, setpasswordErr] = useState("");

  const changeHandler = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const signupSubmitHandler = (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/signup";
    axios
      .post(url, data)
      .then((res) => {
        console.log("res.data: ", res.data);
        setfullNameErr("");
        setEmailErr("");
        setpasswordErr("");
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response);
        if (err) {
          console.log("err.response: ", err.response);
          console.log("err.response.ok: ", err.response.ok);
          console.log("err.response.data: ", err.response.data);
          console.log("err.response.data.message: ", err.response.data.message);

          console.log(errorMsg);
          if (err.response.data.message) {
            setEmailErr(err.response.data.message);
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

              if (errMessage.includes("FullName")) {
                setfullNameErr(errMessage.split(":")[1].trim());
              } else if (err.response.data.message) {
                setfullNameErr(err.response.data.message);
              }
              if (errMessage.includes("email")) {
                setEmailErr(errMessage.split(":")[1].trim());
              }
              if (errMessage.includes("password")) {
                setpasswordErr(errMessage.split(":")[1].trim());
              }
            });
          }
        }
      });
    setfullNameErr("");
    setEmailErr("");
    setpasswordErr("");
  };

  return (
    <div>
      <Header></Header>
      <div className="backdrop" onClick={() => navigate("/")}></div>

      <div className="login-card" style={{ width: "22rem" }}>
        <div className="login-header mb-3">
          <h3>Sign up</h3>
          <span onClick={() => navigate("/")}>&#10005;</span>
        </div>
        <form onSubmit={signupSubmitHandler}>
          <div>
            <input
              className="mt-3"
              type="text"
              placeholder="FullName"
              value={data.FullName}
              name="FullName"
              onChange={changeHandler}
              style={{ width: "18rem", height: "2.5rem" }}
            ></input>
            <div className="text-danger signup_err">
              <p className="m-0">{fullNameErr}</p>
            </div>
          </div>
          <div>
            <input
              className="mt-3"
              type="email"
              name="email"
              value={data.email}
              onChange={changeHandler}
              placeholder="Email Address"
              style={{ width: "18rem", height: "2.5rem" }}
            ></input>
            <div className="text-danger signup_err">
              <p className="m-0 ">{emailErr}</p>
            </div>
          </div>
          <div>
            <input
              className="mt-3"
              type="password"
              name="password"
              value={data.password}
              onChange={changeHandler}
              placeholder="Password"
              style={{ width: "18rem", height: "2.5rem" }}
            ></input>
            <div className="text-danger signup_err">
              <p className="m-0 ">{passwordErr}</p>
            </div>
          </div>

          <div>
            <button className="btn btn-danger m-3" style={{ width: "13rem" }}>
              Sign up
            </button>
          </div>
        </form>
        <div className="">
          Already have an account?
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
