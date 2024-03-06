import React from "react";
import './Header.css';

const Header = () =>{
    return(
        <>
            <div className="main_div">
                <h1 id="h1">Family Wellness</h1>
                <p id="p">MASSAGE THERAPY</p>      
                <ul className="all_links">
                    <li><a href="HOME" className="a first">HOME</a></li>
                    <li><a href="ABOUT" className="a">ABOUT</a></li>
                    <li><a href="SERVICES" className="a">SERVICES</a></li>
                    <li><a href="FAQ" className="a">FAQ</a></li>
                    <li><a href="CONTACT" className="a">CONTACT</a></li>
                </ul>
            </div>
        </>
    );
}

export default Header;