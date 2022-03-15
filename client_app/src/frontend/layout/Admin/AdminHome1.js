import React, { useEffect, useState } from "react"
// import { Nav, NavDropdown } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./Adminhome.css"
import axios from "axios";
import { Link } from "react-router-dom";
// import "../OrderOnline.css"
export default function AdminHome1() {


    return (
        <>
            <div className="w3-sidebar  w3-bar-block" style={{ width: "200px", backgroundColor: "#8a2b06", color: "white" }}>
                <h3 className="w3-bar-item" >Admin</h3>
                <div className="mt-5" style={{ fontSize: "20px" }}>
                <Link to="/fooditems" className="w3-bar-item w3-button" style={{ color: "white" }}>FoodItems</Link>
                    <Link to="/users" className="w3-bar-item w3-button" style={{ color: "white" }}>Users</Link>
                    <Link to="/orders" className="w3-bar-item w3-button" style={{ color: "white" }}> Orders</Link>
                    <Link to="/logout" className="w3-bar-item w3-button" style={{ color: "white" }}> Log Out</Link>
                </div>

            </div>
            <div style={{ marginLeft: "100px" }}>

                <div className="w3-container " style={{ height: "70px", backgroundColor: "#8a2b06" }}>
                    <h1 style={{ color: "white" }}>Curry Kitchen</h1>
                </div>
                <div className="w3-container">


                </div>
            </div>

        </>
    )
}