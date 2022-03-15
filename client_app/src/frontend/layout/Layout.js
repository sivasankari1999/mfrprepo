import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import axios from "axios";
// import FoodItems from './Admin/FoodItems';
// import Orders from './Admin/Orders';
// import Users from './Admin/Users';
import Cart from './Cart';
//import Cart1 from './Cart1';
//import Cart1 from './Cart1';
//import Cart from './Cart';
import ContactUs from './ContactUs';
import Header from './Header';
import Home from './Home/Home';
import Login from './Login';
import Logout from './Logout';
import Menu from './Menu';
import More from './More';
import Navbar from './Navbar';
import OrderOnline from './OrderOnline';
import ShippingDetails from './ShippingDetails';
//import OrderOnline from './OrderOnline';
import Signup from './Signup';



function Layout() {
    //const [cart, setCart] = useState([]);
    // <Route path="/OrderOnline" element={<OrderOnline  cartLength={cartLen} />}></Route>
    const [cart, setCart] = useState([]);
    const [cartLen,setCartLen]=useState(0);
    //const food = [{ name: "siva", age: "22" }, { name: "yoga", age: '22' }];
    const getCart = async () => {
      const cart = await axios.get("http://localhost:5000/cart");
      setCart(cart.data.cartList);
      setCartLen(cart.data.cartList.length);
    };
    useEffect(() => {
      getCart();
    }, []);
    return (
        <div>
            <Routes>
                <Route path="/" element={<Header />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                {/*<Navbar></Navbar>*/}

                <Route path="/home" element={<Home />}></Route>
                <Route path="/Menu" element={<Menu />}></Route>
                <Route path="/OrderOnline" element={<OrderOnline  cartLength={cartLen} />}></Route>
                <Route path="/shippingdetails" element={<ShippingDetails />}></Route>
                 {/* <Route path="/fooditems" element={<FoodItems />}></Route>
                <Route path="/users" element={<Users />}></Route>
                <Route path="/orders" element={<Orders />}></Route> */}
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/More" element={<More />}></Route>
                <Route path="/aboutus" element={<AboutUs />}></Route>
                <Route path="/contactUs" element={<ContactUs />}></Route>
                <Route path="/logout" element={<Logout />}></Route>
            </Routes>

        </div>

    )
}
export default Layout;
