import React, { useEffect, useState } from "react";
import AdminHome1 from "./AdminHome1";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
export default function EditItemForm(props) {
    const {state} = useLocation();
    console.log(state);
    //const {name,description,price,categories,image_path,quantity}= state;
    const {food} =state;
    console.log(food);
    let Starters = "Starters";
    let Briyani = "Briyani";
    let Curries = "Curries";
    let SoupandSalad = " SoupandSalad";
    let VegetarianSpecialities = "VegetarianSpecialities";
    let IndianSweets = "IndianSweets";
    let SoftDrinks = "SoftDrinks";
    let navigate = useNavigate();
    const [foodListitems, setFoodListItems] = useState({
        name: food.name,
        description: food.description,
        price: food.price,
        categories: food.categories,
        image_path: food.image_path,
        quantity: food.quantity
    })
    const changeHandler = ({ currentTarget: input }) => {
        setFoodListItems({ ...foodListitems, [input.name]: input.value });
        console.log(foodListitems);
    };
    const updateFoodList =(e)=>{
        e.preventDefault();
        const url = "http://localhost:5000/editFood/OrderOnline";
        axios
          .put(url, foodListitems)
          .then((res) => {
            console.log("res.data: ", res.data);
            toast.success( "Updated Successfully", {
                position: toast.POSITION.TOP_CENTER,
                autoClose:1000
              });
            // alert("Updated Successfully")
            navigate("/fooditems")
          })
          .catch((err) => {
            console.log(err.response);})
    }
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
            <div>
                <div className="w3-container" id="edititem" >
                    <h3>Add Food Items</h3>
                    <form onSubmit={updateFoodList}>
                        <div>
                            <label>Food Name: </label>
                            <input type="" name="name"
                                value={foodListitems.name}
                                className="form-control"
                                onChange={changeHandler}
                            ></input>
                        </div>
                        <div>
                            <label>Description: </label>
                            <input type="" name="description"
                                value={foodListitems.description}
                                className="form-control"
                                onChange={changeHandler}
                            ></input>
                        </div>
                        <div>
                            <label>Price</label>
                            <input type="" name="price"
                                value={foodListitems.price}
                                className="form-control"
                                onChange={changeHandler}
                            ></input>
                        </div>
                        <div>
                            <label>Quantity: </label>
                            <input type="" name="quantity"
                                 value={foodListitems.quantity}
                                className="form-control"
                                onChange={changeHandler}
                            ></input>
                        </div>
                        <div className="pt-3">
                            <select
                                className="mt-0  ml-5 ms-auto px-3 mb-4 form-select" name="categories"
                                value={foodListitems.categories}
                                onChange={changeHandler}
                            >
                                <option className="option1">
                                    Select a Category
                                </option>
                                <option value={Starters} className="option1">
                                    {Starters}
                                </option>
                                <option value={Briyani} className="option1">
                                    {Briyani}
                                </option>
                                <option value={Curries} className="option1">
                                    {Curries}
                                </option>
                                <option value={SoupandSalad} className="option1">
                                    {SoupandSalad}
                                </option>
                                <option value={VegetarianSpecialities} className="option1">
                                    {VegetarianSpecialities}
                                </option>
                                <option value={IndianSweets} className="option1">
                                    {IndianSweets}
                                </option>
                                <option value={SoftDrinks} className="option1">
                                    {SoftDrinks}
                                </option>
                            </select>
                        </div>
                        <div>
                            <label>image_path: </label>
                            <input type="" name="image_path"
                                value={foodListitems.image_path}
                                className="form-control"
                                 onChange={changeHandler}
                            ></input>
                        </div>
                        <div className="my-3">
                            <button className="btn btn-primary"
                            >Update</button>
                        </div>

                    </form>

                </div>
            </div>
        </>
    );
}
// onSubmit={updateFoodList}