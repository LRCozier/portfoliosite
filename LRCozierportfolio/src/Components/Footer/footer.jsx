import React from "react";
import './footer.css';

const Footer = () => {

    return(
        <>
        <footer id="footer">
            <ul class="social-icons">
                <li><p id="copywright">Luke Rudderham-Cozier © 2024</p></li>
                <li><a href="https://github.com/LRCozier" class="social-icon"> <i class="fa fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/luke-rudderham-cozier-30205343/" class="social-icon"> <i class="fa fa-linkedin"></i></a></li>
            </ul>
        </footer></>
    )
}

export default Footer;