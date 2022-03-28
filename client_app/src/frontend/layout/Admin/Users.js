import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Adminhome.css"
import { Link } from "react-router-dom";
import AdminHome1 from "./AdminHome1";
export default function Users() {
    let [usersList, setUsersList] = useState([]);
    const getUsers = async () => {
        const users = await axios.get("http://localhost:5000/users");
        //console.log(users);
        setUsersList(users.data.foodList);
    };
    useEffect(() => {
        getUsers();
    }, []);
    return (
        <>
            <div className="w3-sidebar  w3-bar-block" id="sidebar_admin">
                <h3 className="w3-bar-item" style={{ color: "white" }} >Admin</h3>
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
            </div>
            <div className="w3-container">
                <div id="Users">
                    <table className='table mt-5' style={{ marginLeft: "190px" }}>
                        <thead>
                            <tr>
                                <th >FullName</th>
                                <th >Email</th>
                                <th >Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersList.map((user, ind) => (
                                <tr key={ind}>
                                    <td>
                                        {user.FullName}
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td>
                                        {user.password}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}