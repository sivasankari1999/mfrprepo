import React, { useEffect, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import "./Adminhome.css"
import AdminHome1 from "./AdminHome1";
export default function FoodItems() {
    let [fooditems, setfooditems] = useState([]);
    let [currentFoodItem,setCurrentFoodItem]= useState([]);
    let navigate = useNavigate();
    const getFoodItems = async () => {
        const fooditems = await axios.get("http://localhost:5000/OrderOnline");
        // let [fooditems, setfooditems] = useState([]);
        setfooditems (fooditems.data.foodList);
      };
      useEffect(() => {
        getFoodItems();
      }, []);
   const removeFromFoodItems = (foodToRemove)=>{
    const url = "http://localhost:5000/deletefood/OrderOnline";
    axios
      .post(url, foodToRemove)
      .then((res) => {
        console.log("res.data: ", res.data);
        alert(res.data.message)
        getFoodItems();
      })
      .catch((err) => {
        console.log(err.response);})
   }
// const editFoodItem =(foodTobeEdited)=>{
// setCurrentFoodItem(foodTobeEdited);
// navigate({
//  pathname: "/editItem", 
//  currentFoodItem: currentFoodItem 
// })

 //},
 
    return (
        <> <AdminHome1/>
            <div className="w3-container">
                   <button className="addItemAdmin mt-2 btn"
               onClick={() => navigate("/addItem")}>Add Item</button>
                <div className="container mt-5" id="FoodItems">

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
                                                onClick={() =>
                                                navigate('/editItem', {state:{food }})}
                                                >
                                                Edit
                                            </button>
                                            <button
                                                className="btn admindelete mt-4"
                                                onClick={() => removeFromFoodItems(food)}
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