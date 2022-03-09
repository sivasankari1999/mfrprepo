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
        <Navbar/>
        <div className="container">
            {
                <div className="row grid-container">
                    <div className="maincontainer">
                        {
                            foodList.map((food, ind) => {
                                return (
                                    <div className="grid-item-container"
                                        key={ind} >
                                         <img src={require(`../../assets/img/${food.image_path}`)} className="Orderonlineimg" alt="some img" ></img>
                                         <h5>{food.name}</h5>
                                         <h5>{food.description}</h5>
                                         <h5>{food.price}</h5>
                                         <button className="mb-5">Add</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
             
        </div>
        <div className="pt-5">
                <Footer></Footer>
            </div>
        </>
    )
}
