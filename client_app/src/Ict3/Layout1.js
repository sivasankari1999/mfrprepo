import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddToFavourites from './AddToFavourites';
import AddToRecommended from './AddToRecommended';
import Header1 from './Header1';
import Home1 from './Home1';
import Login1 from './Login1';
import Logout1 from './Logout1';
import Signup1 from './Signup1';




function Layout1() {
    const [card, setCard] = useState([]);
    const [cart, setCart] = useState([]);
    return (
        <div>
            <Routes>
                <Route path="/" element={<Header1 />}></Route>
                <Route path="/login1" element={<Login1 />}></Route>
                <Route path="/signup1" element={<Signup1/>}></Route>
                <Route path="/home1" element={<Home1 card={card} setCard={setCard} cart={cart} setCart={setCart}/>}></Route>
                <Route path="/addtofavourites" element={<AddToFavourites card={card} setCard={setCard}/>}></Route>
                <Route path="/addtorecommended" element={<AddToRecommended cart={cart} setCart={setCart}/>}></Route>
                <Route path="/logout1" element={<Logout1 />}></Route>
            </Routes>
        </div>

    )
}
export default Layout1;
