import React from "react";
import { SocialIcon } from 'react-social-icons';
import './footer.css';

const Footer = () => {

    return(
        <>
        <footer id="footer">
                <p id="copywright">Luke Rudderham-Cozier © 2024</p>
                <SocialIcon url="https://github.com/LRCozier" network="github" />
                <SocialIcon url="https://www.linkedin.com/in/luke-rudderham-cozier-30205343/" network="linkedin" />
        </footer></>
    )
}

export default Footer;