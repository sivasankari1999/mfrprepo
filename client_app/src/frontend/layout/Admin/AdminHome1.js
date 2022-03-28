import React, { useEffect, useState } from "react"
// import { Nav, NavDropdown } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./Adminhome.css"
import axios from "axios";
import { Link } from "react-router-dom";
export default function AdminHome1() {
    return (
        <>
            <div className="w3-sidebar  w3-bar-block" id="sidebar_admin">
                <h3 className="w3-bar-item" style={{color:"white"}} >Admin</h3>
                <div className="mt-5" style={{ fontSize: "20px" }}>
                <Link to="/fooditems" className="w3-bar-item w3-button" style={{ color: "white" }}>FoodItems</Link>
                    <Link to="/users" className="w3-bar-item w3-button" style={{ color: "white" }}>Users</Link>
                    <Link to="/admin/orders" className="w3-bar-item w3-button" style={{ color: "white" }}> Orders</Link>
                    <Link to="/logout" className="w3-bar-item w3-button" style={{ color: "white" }}> Log Out</Link>
                </div>

            </div>
            <div style={{ marginLeft: "100px" }}>

                <div className="w3-container " style={{ height: "70px", backgroundColor: "#8a2b06" }}>
                    <h1 style={{ color: "white" }}>Curry Kitchen</h1>
                </div>
                <div className="w3-container">

                <h2 className="adminwelcome">Welcome, Admin!</h2>
                <img
                  src={require("../../../assets/img/adminimg.jpg")}
                  alt=""
                  className="adminimh"
                />

                </div>
            </div>

        </>
    )
}