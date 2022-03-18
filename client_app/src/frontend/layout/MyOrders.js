import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import Navbar from "./Navbar";
export default function MyOrders() {
const [myOrders, setMyOrders] = useState([]);
const getMyOrders = async () => {
    const orders= await axios.get("http://localhost:5000/admin/orders");
    // console.log(orders.data.);
    setMyOrders(orders.data.data);
  };
  useEffect(() => {
    getMyOrders();
  }, []);
    return (
        <>
        <Navbar/>
            <div className="container_myorders mt-2 mx-5" id="FoodItems">
                <div className="fooditems ">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th >Product</th>
                                <th >Price</th>
                                <th >Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myOrders.map((food, ind) => (
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
            <div className="pt-5">
                <Footer/>
            </div>
        </>
    )
}