import React, { useEffect, useState } from "react";
import axios from "axios"
export default function Orders() {
    const [cart, setCart] = useState([]);
    const [cartLen, setCartLen] = useState(0);
    const getCart = async () => {
        const cart = await axios.get("http://localhost:5000/cart");
        setCart(cart.data.cartList);
        setCartLen(cart.data.cartList.length);
    };
    useEffect(() => {
        getCart();
    }, []);
    return (
        <>
            <div className="w3-container">

                <div className="container" id="FoodItems">
                    <div className="fooditems ">
                        <table className='table mt-2'>
                            <thead>
                                <tr>
                                    <th ></th>
                                    <th >Product</th>
                                    <th >Price</th>
                                    <th >Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((food, ind) => (
                                    <tr key={ind}>
                                        <th>
                                            <img
                                                style={{
                                                    maxWidth: '110px',
                                                }}
                                                src={require(`../../../assets/img/${food.image_path}`)}
                                                className="-imgcard-top1"
                                                alt="Card image cap"
                                            />
                                        </th>
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