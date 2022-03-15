import React, { useEffect, useState } from "react"
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Adminhome.css"
import axios from "axios";
export default function Adminhome() {
    let [usersList, setUsersList] = useState([]);
    let [fooditems, setfooditems] = useState([]);
    const getUsers = async () => {
        const users = await axios.get("http://localhost:5000/users");
        //console.log(users);
        setUsersList(users.data.foodList);
    };
    const getFoodItems = async () => {
        const fooditems = await axios.get("http://localhost:5000/FoodItems");
        //console.log(fooditems);
        setfooditems(fooditems.data.foodList);
    };
    useEffect(() => {
        getUsers();
        getFoodItems();
    }, []);
    //console.log(usersList);
    return (
        // <><header>
        //     <div>
        //         <Link to='/home' className="curry">
        //             Curry Kitchen
        //         </Link>
        //         <ul>
        //             <li className="nav-item dropdown">
        //                 <li>
        //                     <NavDropdown title={<img
        //                         src={require("../../../assets/img/avatar.jfif")}
        //                         className="rounded-circle"
        //                         height="22"
        //                         alt="Avatar"
        //                         loading="lazy"
        //                     />}><span className="px-5" style={{ color: "#8a2b06", fontFamily: "cursive" }}>Admin </span>
        //                         <NavDropdown.Item >
        //                             <Link to="/logout" id="nav-item">
        //                                 Log out
        //                             </Link>
        //                         </NavDropdown.Item >
        //                     </NavDropdown>
        //                 </li>
        //             </li>
        //         </ul>
        //     </div>
        // </header>
        // <>
        <div className="container-fluid ">
            <div className="row ">
                <div className="col-2" id="sidebar">
                    <h4>Curry Kitchen</h4>
                    {/* <nav className="navbar navbar-expand-lg 
            navbar-light bg-primary">
                        <ul>
                            <li className="nav-item dropdown">
                                <li>
                                    <NavDropdown title={<img
                                        src={require("../../../assets/img/avatar.jfif")}
                                        className="rounded-circle"
                                        height="22"
                                        alt="Avatar"
                                        loading="lazy"
                                    />}><span className="px-5" style={{ color: "#8a2b06", fontFamily: "cursive" }}>Admin </span>
                                        <NavDropdown.Item >
                                            <Link to="/logout" id="nav-item">
                                                Log out
                                            </Link>
                                        </NavDropdown.Item >
                                    </NavDropdown>
                                </li>
                            </li>
                        </ul>
                    </nav> */}

                    <a href="/FoodItems"><i className="fa fa-fw fa-home"></i> FoodItems</a>
                    <a href="/users"><i className="fa fa-fw fa-wrench"></i> Users</a>
                    <a href="/Orders"><i className="fa fa-fw fa-user"></i> Orders</a>
                </div>
                <div className="col-10" style={{ textAlign: "justify" }}>
                    <div className="col-auto" style={{ padding: "0" }}>
                        <nav className="navbar" style={{ backgroundColor: "#8a2b06", height: "100px" }}>
                            <ul>
                                <li className="nav-item dropdown">
                                    <li>
                                        <NavDropdown title={<img
                                            src={require("../../../assets/img/avatar.jfif")}
                                            className="rounded-circle"
                                            height="22"
                                            alt="Avatar"
                                            loading="lazy"
                                        />}><span className="px-5" style={{ color: "#8a2b06", fontFamily: "cursive" }}>Admin </span>
                                            <NavDropdown.Item >
                                                <Link to="/logout" id="nav-item">
                                                    Log out
                                                </Link>
                                            </NavDropdown.Item >
                                        </NavDropdown>
                                    </li>
                                </li>
                            </ul>

                        </nav>
                        <div className="col-10" style={{textAlign:" justify"}}>
                            <div id="Users">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th >FullName</th>
                                            <th >Email</th>
                                            <th >Password</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {usersList.map((user, ind) => (
                                            <tr key={ind}>
                                                <td>
                                                    {user.FullName}
                                                </td>
                                                <td>
                                                    {user.email}
                                                </td>
                                                <td>
                                                    {user.password}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* <div id="FoodItems">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th >Name</th>
                                        <th >Description</th>
                                        <th >Price</th>
                                        <th>Categories</th>
                                        <th>Image_path</th>
                                        <th>Categories</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fooditems.map((food, ind) => (
                                        <tr key={ind}>
                                            <td>
                                                {food.name}
                                            </td>
                                            <td>
                                                {food.description}
                                            </td>
                                            <td>
                                                {food.price}
                                            </td>
                                            <td>
                                                {food.price}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                                    </div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}