import React from "react";
import './Footer.css';

const Footer = () =>{
    return (
        <div className="main_footer_section">
            <h2 className="h2">Family Wellness Massage Therapy</h2>
            <p className="grey_color">
                9876 Main Street, Suite 123, Mainland, ML12345<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone:987.654.3210
            </p>
            <div id="grey_backcolor">
            Copyright © 2018 Website.com.All Rights Reserved
            </div>
            <p className="grey_color">
                Powered by Website.com
            </p>
        </div>
    );
}

export default Footer;