import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import Cart from './Cart';
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
//import OrderOnline from './OrderOnline';
import Signup from './Signup';



function Layout() {
    const [cart, setCart] = useState([]);
    const getCartTotal = () => {
        return cart.reduce(
          (sum, { quantity }) => sum + quantity,
          0
        );
      };
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<Header />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
            {/*<Navbar></Navbar>*/}
           
                <Route path="/home" element={<Home />}></Route>
                <Route path="/Menu" element={<Menu />}></Route>
                <Route path="/OrderOnline" element={<OrderOnline cart={cart} setCart={setCart} />}></Route>
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}></Route>
                <Route path="/More" element={<More />}></Route>
                <Route path="/aboutus" element={<AboutUs />}></Route>
                <Route path="/contactUs" element={<ContactUs />}></Route>
                <Route path="/logout" element={<Logout />}></Route>
            </Routes>

        </div>

    )
}
export default Layout;
