import React from "react";
import {Link } from "react-router-dom";
import './Navbar1.css';
import { Nav} from "react-bootstrap";

function Navbar1() {
    return (
        <div className="header2">
            <Nav>
                <Link to='/home1' className='navbar-logo1'>
                    Book Store
                </Link>
                <ul>
                    <li><Link  to="/addtofavourites">
                        Favourite List
                    </Link></li>
                    <li> <Link  to="/addtorecommended">
                        Recommended List
                    </Link></li>
                    <li>
                    <Link  to="/logout1">
                        Log Out
                    </Link>
                    </li>
                </ul>
            </Nav>
        </div>
    )
}
export default Navbar1;