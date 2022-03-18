import React from "react";
import { useState,useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import "../layout/Header.css";
import Login from "./Login.js";
import Signup from "./Signup";
import Header from "./Header";
export default function Logout() {
    let navigate=useNavigate();
    useEffect(() => {
        axios.post("http://localhost:5000/logout");
        localStorage.clear();
        navigate("/");
    });
    return(
        <Header></Header>
    )
}
