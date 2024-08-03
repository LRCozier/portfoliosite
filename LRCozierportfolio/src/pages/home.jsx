import React from "react";
import profile from '..assets/images/profile.jpg';

const Home = () => {

    return(
        <div className="hero" id="hero">
        <section className="portfolio-section" id="hero-section">
            <img src={profile} alt="profilepicture"></img>
            <h1>Luke Rudderham-Cozier</h1>
            <h2>Front End Developer</h2>
        </section>
        </div>
    )
}

export default Home;