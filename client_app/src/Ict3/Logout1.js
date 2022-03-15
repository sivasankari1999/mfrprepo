import React from "react";
import { useState,useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import './Header1.css'
import Header1 from "./Header1";
export default function Logout1() {
    let navigate=useNavigate();
    useEffect(() => {
        localStorage.clear();
        navigate("/");
    });
    return(
        <Header1></Header1>
    )
}
