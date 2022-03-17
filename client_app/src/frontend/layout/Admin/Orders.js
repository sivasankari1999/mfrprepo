import React, { useEffect, useState } from "react";
import axios from "axios"
import AdminHome1 from "./AdminHome1";
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
        <AdminHome1/>
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