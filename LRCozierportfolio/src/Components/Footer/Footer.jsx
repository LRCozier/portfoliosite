import React from "react";
import {SocialIcon} from 'react-social-icons';

const Footer = () =>{

    return(
        <>
        <div className="footer-section">
            <footer>
                <div className="footer-section-socials">
                    <SocialIcon url="https://www.instagram.com/lacozierofficial/" />
                    <SocialIcon url="https://www.linkedin.com/in/luke-rudderham-cozier-30205343/" />
                    <SocialIcon url="https://github.com/LRCozier" />
                </div>
                <div className="footer-section-copyright">
                    <p>	&#169;Luke Rudderham-Cozier, 2024</p>
                </div>
            </footer>
        </div>
        </>
    )
}

export default Footer;