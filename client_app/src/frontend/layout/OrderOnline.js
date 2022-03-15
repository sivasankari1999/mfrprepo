import React, { useEffect, useState } from "react";
import axios from "axios";
import "./OrderOnline.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
//import { Navbar } from "react-bootstrap";
export default function OrderOnline({cartLength}) {
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
  //const food = [{ name: "siva", age: "22" }, { name: "yoga", age: '22' }];
  const getUsers = async () => {
    const users = await axios.get("http://localhost:5000/OrderOnline");
    setfoodList(users.data.foodList);
  };
  useEffect(() => {
    getUsers();
  }, []);
  //console.log(foodList);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const addToCart = (food) => {
        // cart = cart.filter((item, ind) => {
        //   if (item.name == food.name) {
        //    //alert("Already added to cart");
        //   }
        //   return item.name !== food.name;
        // });
        // setCart(cart);
        // let newCart = [...cart, food];
        // console.log(newCart);
        // setCart(newCart);
        const url = "http://localhost:5000/cart";
    axios
      .post(url, food)
      .then((res) => {
        console.log("res.data: ", res.data);
        alert(res.data.message)
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.message)});    
  };
  return (
    <>
      <Navbar />
      <div className="filter_cart">
        <div>
          <h6 style={{ color: " #8a2b06" }} className="my-3 m-0">
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
          <Link to="/cart" className="cartpage">
            Cart ({cartLength})
            <span>
              {" "}
              <img
                src={require("../../assets/img/cart.jfif")}
                alt=""
                className="img1"
              />
            </span>
          </Link>
        </span>
      </div>
      <div className="container">
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
      <div className="pt-5">
        <Footer></Footer>
      </div>
    </>
  );
}
