import React, { useState } from "react";
import AdminHome1 from "./AdminHome1";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
export default function AddItemForm() {
    let Starters = "Starters";
    let Briyani = "Briyani";
    let Curries = "Curries";
    let SoupandSalad = " SoupandSalad";
    let VegetarianSpecialities = "VegetarianSpecialities";
    let IndianSweets = "IndianSweets";
    let SoftDrinks = "SoftDrinks";
    let navigate = useNavigate();
    const [foodListitems, setFoodListItems] = useState({
        name: " ",
        description: " ",
        price: " ",
        categories: " ",
        image_path: " ",
        quantity: " "
    })
    const changeHandler = ({ currentTarget: input }) => {
        setFoodListItems({ ...foodListitems, [input.name]: input.value });
    };
    const createFoodItem = (e) => {
        e.preventDefault();
        const url = "http://localhost:5000/addFood/OrderOnline";
        axios
            .post(url, foodListitems)
            .then((res) => {
                console.log("res.data: ", res.data);
                // alert(res.data.message);
                toast.success(res.data.message , {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose:1000
                  });
                navigate("/fooditems");
            })
            .catch((err) => {
                console.log(err.response);
            });

    };
    return (
        <>
            <AdminHome1 />
            <div>
                <div className="w3-container"  id="additem">
                    <h3>Add Food Items</h3>
                    <form onSubmit={createFoodItem}>
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
                            >Add FoodItem</button>
                        </div>

                    </form>

                </div>
            </div>
        </>
    );
}