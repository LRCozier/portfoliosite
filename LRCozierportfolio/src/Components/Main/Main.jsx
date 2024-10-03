import React from "react";
import Profile from ".assets/Profile.jpg";

const Main = () => {

    return(
        <>
        <div className="main-section">
            <div className="profile-picture-container">
                <img className="profile-pic" src={Profile} alt="L.A. Cozier Profile Picture" />
                <h1>L.A. Cozier</h1>
                <h2>Front End Engineer</h2>
            </div>

        </div>
        </>
    )
}

export default Main;