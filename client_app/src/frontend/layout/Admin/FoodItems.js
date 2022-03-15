import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Adminhome.css"
export default function FoodItems() {
    let [fooditems, setfooditems] = useState([]);

    const getFoodItems = async () => {
        const fooditems = await axios.get("http://localhost:5000/FoodItems");
        //console.log(fooditems);
        setfooditems(fooditems.data.foodList);
    };
    useEffect(() => {
        getFoodItems();
    }, []);
    return (
        <>
            <div className="w3-container">

                <div className="container" id="FoodItems">

                    {fooditems.map((food, ind) => {
                        return (
                            <div className="card_container bg-light" key={ind}>
                                <div className="card ">
                                    <img
                                        src={require(`../../../assets/img/${food.image_path}`)}
                                        className="card-img-top"
                                        alt="Card image cap"
                                    />
                                    <div className="card-body" id="card-1">
                                        <h4 className="card-title">{food.name}</h4>
                                        <h6 className="card-subtitle pt-1">{food.description}</h6>
                                        <h4 className="cardprice">₹{food.price}</h4>
                                        <div className="adminbtns">
                                            <button
                                                className="btn adminedit mt-4"

                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="btn admindelete mt-4"

                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        );
                    })}

                </div>
            </div>
        </>
    )
}