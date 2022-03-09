import React, { useEffect, useState } from "react";
import axios from "axios";
import './OrderOnline.css';
import Footer from "./Footer";
import Navbar from "./Navbar";
//import { Navbar } from "react-bootstrap";
export default function OrderOnline() {
    const [errormsg, setErrormsg] = useState("");
    const [foodList, setfoodList] = useState([]);
    const food = [{ name: "siva", age: "22" }, { name: "yoga", age: '22' }];
    const getUsers = async () => {
        const users = await axios.get('http://localhost:5000/OrderOnline');
        setfoodList(users.data.foodList);
    };
    useEffect(() => {
        getUsers();
    }, []);
    console.log(foodList);
    return (
        <>
            <Navbar />
            <div className="container">
                { foodList.map((food, ind) => {
                    return (
                    <div className="card_container bg-light"   key={ind}>
                       
                            <div className="card ">
                                <img  src={require(`../../assets/img/${food.image_path}`)} className="card-img-top"  alt="Card image cap" />
                                <div className="card-body" id="card-1">
                                    <h4 className="card-title">{food.name}</h4>
                                    <h6 className="card-subtitle pt-1">{food.description}</h6>
                                    <h4 className="cardprice mt-3">₹{food.price}</h4>
                                    <button className="mt-3">Add</button>
                                </div>
                            </div>
                        </div>
                
                    )
                })
                }
            </div>
            <div className="pt-5">
                <Footer></Footer>
            </div>
        </>
    )
}
