import React, { useState } from 'react';
import './header.css';

//Header includes Space for the Logo (used to navigate users back to hero section)
//Nav bar is responsive and will show as a hamburger for viewing on mobile but open on a desktop/laptop

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <header className="header">
      <div className="logo"></div>
      <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'bar-open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'bar-open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'bar-open' : ''}`}></div>
      </div>
    </header>
    </>
  );
};

export default Header;