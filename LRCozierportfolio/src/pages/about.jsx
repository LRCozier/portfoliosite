import React from "react";
import HTML5 from '../assets/images/skills/HTML5.png';
import CSS3 from '../assets/images/skills/CSS3.png';
import JavaScript from '../assets/images/skills/JavaScript.png';
import Nodejs from '../assets/images/skills/Node.js.png';
import Reactjs from '../assets/images/skills/React.png';
import Jest from '../assets/images/skills/Jest.png';
import Git from '../assets/images/skills/Git.png';
import Python from '../assets/images/skills/Python.png';
import MySQL from '../assets/images/skills/MySQL.png';

const about= () => {
    return (
        <>
            <section className="portfolio-section" id="about-me">
                <div className="section-title-container">
                    <h2 className="section-title">About Me</h2>
                </div>
                <div id="about-me-summary">
                    <p>Amidst the upheaval of the COVID-19 pandemic in 2020, I stumbled upon a newfound passion that has since
                        become the cornerstone of my journey: coding. As the world slowed down, I delved into the intricacies of
                        programming, captivated by its limitless possibilities and the power to create something tangible from
                        mere lines of code. Since that pivotal moment, I have devoted myself wholeheartedly to mastering this craft,
                        constantly seeking to expand my knowledge and skills. Coding has not just become a hobby or a career path—it
                        has become an integral part of who I am, driving me forward with an insatiable curiosity and a relentless
                        pursuit of excellence.
                    </p>
                </div>
                <div id="skills">
                    <h3>My Stack</h3>
                    <img src={HTML5} alt="HTML5"/>
                    <img src={CSS3} alt="CSS3"/>
                    <img src={JavaScript} alt="Javascript"/>
                    <img src={Nodejs} alt="Javascript"/>
                    <img src={Reactjs} alt="React" />
                    <img src={Nodejs} alt="Node.js" />
                    <img src={Jest} alt="Jest" />
                    <img src={Git} alt="Git" />
                    <img src={Python} alt="Python" />
                    <img src={MySQL} alt="MySQL" />
                </div>
            </section>
        </>
    );
}