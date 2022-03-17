import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import axios from "axios";
import Cart from './Cart';
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
import Signup from './Signup';
import AdminHome1 from './Admin/AdminHome1';
import FoodItems from './Admin/FoodItems';
import Orders from './Admin/Orders';
import Users from './Admin/Users';
import AddItemForm from './Admin/AddItemForm';
import EditItemForm from './Admin/EditItemForm';
import Forgotpassword from './Forgotpassword';
import Resetpassword from './ResetPassword';

function Layout() {
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
    <div>
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/forgotpassword" element={<Forgotpassword />}></Route>
        <Route path="http://localhost:3000/reset/:token" element={<Resetpassword />}></Route>

        <Route path="/home" element={<Home />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
        <Route path="/OrderOnline" element={<OrderOnline cartLength={cartLen} />}></Route>
        <Route path="/shippingdetails" element={<ShippingDetails />}></Route>
        <Route path="/Admin" element={<AdminHome1 />}></Route>
        <Route path="/fooditems" element={<FoodItems />}></Route>
        <Route path="/addItem" element={<AddItemForm />}></Route>
        <Route path="/editItem" element={<EditItemForm />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/admin/orders" element={<Orders />}></Route>
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
