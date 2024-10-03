import React from "react";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io5";

const About = () => {

    return(
        <>
        <div className="about-me-section">
            <h3>About Me</h3>
            <p>A Front-End Developer with a passion for clean, responsive design and
                intuitive user experiences. I thrive on solving complext problems with
                simple, elegant solutions.
            </p>
            <div className="skills-section">
            <h4>Skills</h4>
            <div className="skills-container">
            <IoLogoHtml5 />
            <IoLogoCss3 />
            <IoLogoJavascript/>
            <IoLogoReact/>
            <IoLogoNodejs/>
            </div>
            </div>
        </div>
        </>
    )
}

export default About;