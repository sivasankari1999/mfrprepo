import React from "react"
import './Menu.css'
import  Footer from "./Footer"
import Navbar from "./Navbar"

export default function Menu() {
    return (
        <>
        <Navbar/>
        <div className="container-menu">
           <img src={require("../../assets/img/menu.jpg")}alt="" id="img1"  />
            <br/>
            <br/>
            <br/>
            <p><em>AUTHENTIC INDIAN CUISINE</em></p> <br/>
            <p>All entrees can be made Mild, Medium, and Hot spices</p>
            <p><b>NOTE: Gluten Free and Vegan Upon Request Only</b></p>
            <p>90% of the Menu is gluten free unless stated and Vegetarians Entrees can be made vegan Upon <br/>
            Request Using Coconut Milk or without any cream. Most Entrees can be made dairy Free as well. We
            <br/> are facility that uses nuts, raisins; gluten so may contain traces of it.</p>


            <div className="card2">
                <div className="row ">
                <div className="col-sm-12 col-md-6 col-xs-12 col-lg-6 px-1 py-1">
                <h3>STARTERS</h3>
                    <li><b>Vegetable Somasa </b>- Crisp Pastry filled with Potato, 
                        peas,<br/>spices and deep fried (2pcs) I 6</li>
                    <li><b>Vege Samosa Chat </b>- Smashed Veg samosa Mixed chana with<br/>
                            yogurt, tamarind, Mint and chat masala spices) Could be made<br/>
                            vegan and gluten free I 9 *</li>
                    <li><b>Tandoori Wings </b>- Chili Garlic Sauce I 11 *</li>
                    <li><b>Vegan Wings </b> - Battered cauliflower with corn starch/Indian<br/>
                                   spices tossed with garlic chili sauce. I 9</li>
                </div>

                <div className="col-sm-12 col-md-6 col-xs-12 col-lg-6 px-1 py-1">
                    <h3>CURRIES</h3>
                        <li><b>Famous Tikka Masala</b> (cooked with tomato onion based <br/>
                                 cream sauce). Most popular.</li>
                        <li><b>Mix Max Masala </b>(cooked with Mixed Vegetable with masala<br/> sauce).+1</li>
                        <li><b>Korma</b> (cooked with cream, Nuts and raisins to give very<br/>delicate taste) +1</li>
                        <li><b>Saag </b>(spinach cooked with cream, freshly ground spices, garlic,<br/>ginger, onion and tomato
                        </li>
                </div>
                <div className="col-sm-12 col-md-6 col-xs-12 col-lg-6 px-1 py-1">
                <h3>Biryanis</h3> 
                <p>Basmati Rice cooked with curry spiced<br/>sauce with saffron and vegetables. 
                                     Served with raita. <br/><b>Vegetables, Paneer, Chicken (+1), Lamb (+3), 
                                        Shrimp (+3), Goat Bone in (+5)</b></p>

                </div>

                
                <div className="col-sm-12 col-md-6 col-xs-12 col-lg-6 px-1 py-1">
                <h3>Vegetarian Specialities</h3>
                    <li><b>Vegetable Korma</b> (Mixed vegetables with cream, coconut,<br/>Nuts and raisins) Vegan15.</li>
                    <li><b>Plain Saag </b>(Spinach Cooked with cream sauce)</li>
                    <li><b>Saag Paneer</b> (Spinach with house made cheese & cream) </li>
                    <li><b>Paneer masala</b> (House made Cheese with Cream sauce)</li>
                </div>

                <div className="col-sm-12 col-md-6 col-xs-12 col-lg-6 px-1 py-1">
                <h3>Soup and Salad(Single / Family) </h3>
                <li>Daal Mushroom soup /Tomato Coconut soup - Vegan5/12</li>
                <li>Mulligatawny Soup (Chicken and lentil) - 6/14</li>
                <li>Veg Salad Vegan 5/12</li>
                </div>
                
                <br/>

                <div className="col-sm-12 col-md-6 col-xs-12 col-lg-6 px-1 py-1">
                    <h3>Indian Sweets</h3>
                    <li>Kheer (Rice Pudding)</li>
                    <li>Gulab Jamun (Milk Balls in Rose water)*</li>
                    <li>Gajar Halwa (Carrot Pudding)</li>
                    <li>Moong Daal Halwa (Yellow Lentils, nuts, and butter) pudding</li>
                </div>


                <div className="col-sm-12 col-md-6 col-xs-12 col-lg-6 px-1 py-1">
                    <h3>Soft drinks</h3>
                    <li>Masala Chai Tea (Hot or Iced) </li>
                    <li>Black and Herbal Tea </li>
                    <li>Indian Spiced Iced tea </li>
                    <li>Mango / Strawberry / Banana Lassi </li>
                    <li>Salt Lassi </li>
                    <li>Coke/sprite</li>
                    <li>Smart Water 1L </li>
                    <li>Masala Chai Frappuccino </li>
                </div>
            </div>
            </div>
            <div className="pt-5">
                <Footer></Footer>
            </div>
        </div>
        </>
    )
}