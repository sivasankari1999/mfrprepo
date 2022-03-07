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
                    <li><Link eventKey="Home" to="/home">
                        Home
                    </Link></li>
                    <li> <Link eventKey="Menu" to="/menu">
                        Menu
                    </Link></li>
                    <li> <Link eventKey="OrderOnline" to="/OrderOnline">
                        OrderOnline
                    </Link></li>
                    <li>
                        <NavDropdown title="More" id="nav-dropdown">
                            <NavDropdown.Item >
                                <NavLink eventKey="aboutus" to="/aboutus" id="nav-item">
                                    About Us
                                </NavLink>
                            </NavDropdown.Item >
                            <NavDropdown.Item >
                                <NavLink eventKey="Contactus" to="/contactus" id="nav-item">
                                    Contact us
                                </NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    <li>
                    <Link eventKey="logout" to="/">
                        Log Out
                    </Link>
                    </li>
                </ul>
            </Nav>
        </header>
    )
}
export default Navbar;