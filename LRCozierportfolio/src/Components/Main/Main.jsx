import React from "react";
import './Main.css'
import About from "../About/About";
import Footer from "../Footer/Footer";

const Main = () => {

    return(
        <>
        <div className="main-section">
            <div className="profile-picture-container">
                <img src='Profile.jpg' alt="profile picture"/>
            </div>
                <h1>L.A. Cozier</h1>
                <h2>Front End Engineer</h2>
                <About />
                <Footer />
        </div>
        </>
    )
}

export default Main;