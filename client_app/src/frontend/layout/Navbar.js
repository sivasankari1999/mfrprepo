import React from "react";
import {Link, NavLink } from "react-router-dom";
import './Navbar.css';
import { Nav, NavDropdown } from "react-bootstrap";
import Home from "./Home/Home";
function Navbar() {
    return (
        <header>
            <Nav>
                <Link to='/home' className='navbar-logo'>
                    Curry Kitchen
                </Link>
                <ul>
                    <li><Link  to="/home">
                        Home
                    </Link></li>
                    <li> <Link  to="/menu">
                        Menu
                    </Link></li>
                    <li> <Link  to="/OrderOnline">
                        OrderOnline
                    </Link></li>
                    <li>
                        <NavDropdown title="More" id="nav-dropdown">
                            <NavDropdown.Item >
                                <Link to="/aboutus" id="nav-item">
                                    About Us
                                </Link>
                            </NavDropdown.Item >
                            <NavDropdown.Item >
                                <Link to="/contactus" id="nav-item">
                                    Contact us
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    <li>
                    <Link  to="/logout">
                        Log Out
                    </Link>
                    </li>
                </ul>
            </Nav>
        </header>
    )
}
export default Navbar;