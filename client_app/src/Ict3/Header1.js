import React from "react";
import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";
import "./Header1.css";
export default function Header1() {
    let navigate = useNavigate();
    return (
        <div>
            {/* <Router> */}
            <div className="header1">
                <h1>Book Store</h1>
            </div>
            <div className="main-bg-1">
                <div className="centred1">
                    Welcome To Book Store!<br/>
                    Click Here to Login<br/> 👇
                </div>
            </div>
            <div>
                <button
                    className="btn2"
                    onClick={() => {
                        navigate("/login1");
                    }}
                >
                    Login
                </button>
            </div>
        </div>
  );
}
