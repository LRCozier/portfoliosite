import React from "react";
import Profile from '../assets/images/socials/Profile.jpg';

const Home = () => {

    return(
        <div className="hero" id="hero">
        <section className="portfolio-section" id="hero-section">
            <img src={Profile} alt="profilepicture" id="profile-picture"></img>
            <h1>Luke Rudderham-Cozier</h1>
            <h2>Front End Developer</h2>
        </section>
        </div>
    )
}

export default Home;