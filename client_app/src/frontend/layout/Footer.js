import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"
export default function Footer(){
    return(
      <div className="footer">
        <div>
          <h5 className="text-start copyright">Copyright © 2022 Curry Kitchen- All Rights Reserved.</h5>
          <h6 className="mail">currykitchen@gmail.com</h6>
        </div>
        <div className="link-items ">
        <Link to='/contactus' id="link-item">
                    Contact Us
        </Link>
        <Link to='/aboutus' id="link-item">
                    About Us
        </Link>
        </div>
        
      </div>
    )
}//pb-0 pt-3 px-2
