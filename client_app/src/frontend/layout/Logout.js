import React from "react";
import { useState,useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "../layout/Header.css";
import Login from "./Login.js";
import Signup from "./Signup";
import Header from "./Header";
export default function Logout() {
    let navigate=useNavigate();
    useEffect(() => {
        localStorage.clear();
        navigate("/");
    });
    return(
        <Header></Header>
    )
}
