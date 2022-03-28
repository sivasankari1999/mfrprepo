import React, { useEffect, useState } from "react";
import axios from "axios"
import AdminHome1 from "./AdminHome1";
import { Link } from "react-router-dom";
export default function Orders() {
    const [orderList, setOrderList] = useState([]);
    const getOrders = async () => {
        const orderList = await axios.get("http://localhost:5000/admin/orders");
        console.log(orderList.data);
        setOrderList(orderList.data.data);
    };
    useEffect(() => {
        getOrders();
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

                <div className="container" id="FoodItems">
                    <div className="fooditems ">
                        <table className='table mt-2'>
                            <thead>
                                <tr>
                                    <th >Product</th>
                                    <th >Price</th>
                                    <th >Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderList.map((food, ind) => (
                                    <tr key={ind}>
                                        <td>
                                            {food.name}
                                        </td>
                                        <td>
                                            ₹{parseInt(food.price) * parseInt(food.quantity)}
                                        </td>
                                        <td>
                                            {food.quantity}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}