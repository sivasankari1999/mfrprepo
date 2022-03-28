import React, { useEffect, useState } from "react";
import axios from "axios";
import "./OrderOnline.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
//import { Navbar } from "react-bootstrap";
export default function OrderOnline({ cartLength }) {
  let Starters = "Starters";
  let Briyani = "Briyani";
  let Curries = "Curries";
  let SoupandSalad = " SoupandSalad";
  let VegetarianSpecialities = "VegetarianSpecialities";
  let IndianSweets = "IndianSweets";
  let SoftDrinks = "SoftDrinks";
  let All = "All;";
  const [errormsg, setErrormsg] = useState("");
  const [foodList, setfoodList] = useState([]);
  const getFoodItems = async () => {
    const fooditems = await axios.get("http://localhost:5000/OrderOnline");
    setfoodList(fooditems.data.foodList);
  };
  useEffect(() => {
    getFoodItems();
  }, []);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const addToCart = (food) => {
    const url = "http://localhost:5000/cart";
    axios
      .post(url, food)
      .then((res) => {
        console.log("res.data: ", res.data);
        // alert(res.data.message)
        toast.success(res.data.message , {
          position: toast.POSITION.TOP_CENTER,
          autoClose:1000
        });
      })
      .catch((err) => {
        console.log(err.response);
        // alert(err.response.data.message)
        toast.error(err.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
      });
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="filter_cart">
          <div>
            <h6 style={{ color: " #8a2b06" }} className="category">
              Select a Category of Food!!!
            </h6>
            <select
              className="mt-0  ml-5 ms-auto px-3 mb-4"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All" className="option1">
                All
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
          
          <span>
            <Link to="/cart" className="cartpage_orderonline">
              Cart ({cartLength})
              <span>
                {" "}
                <img
                  src={require("../../assets/img/cart.jfif")}
                  alt=""
                  className="cart_img1"
                />
              </span>
              <span className="px-2">
            <Link to="/myOrders" className="orderspage">
              My Orders
            </Link>
          </span>
            </Link>
          </span>
        </div>
        <div className="container-orderOnline">
          {selectedCategory == "All" &&
            foodList.map((food, ind) => {
              return (
                <div className="card_container bg-light" key={ind}>
                  <div className="card ">
                    <img
                      src={require(`../../assets/img/${food.image_path}`)}
                      className="card-img-top"
                      alt="Card image cap"
                    />
                    <div className="card-body" id="card-1">
                      <h4 className="card-title">{food.name}</h4>
                      <h6 className="card-subtitle pt-1">{food.description}</h6>
                      <h4 className="cardprice mt-3">₹{food.price}</h4>
                      <button
                        className="btn addtocart-btn mt-3"
                        onClick={() => addToCart(food)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          {selectedCategory &&
            foodList
              .filter((food) => food.categories.trim() == selectedCategory.trim())
              .map((food, ind) => {
                return (
                  <div className="card_container bg-light" key={ind}>
                    <div className="card ">
                      <img
                        src={require(`../../assets/img/${food.image_path}`)}
                        className="card-img-top"
                        alt="Card image cap"
                      />
                      <div className="card-body" id="card-1">
                        <h4 className="card-title">{food.name}</h4>
                        <h6 className="card-subtitle pt-1">{food.description}</h6>
                        <h4 className="cardprice mt-3">₹{food.price}</h4>
                        <button
                          className="btn btn-success mt-3"
                          onClick={() => addToCart(food)}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <div className="pt-5">
        <Footer/>
      </div>
    </>
  );
}
