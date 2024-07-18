import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const handleExit = () => {
    window.location.href = 'about:blank';
  };

  return (
    <div className="Navbar">
      <div className="LogoContainer">
        <span className="LogoText">Student Buddy</span>
      </div>
      <Link to="/">Home</Link>
      <Link to="/Aboutus">About</Link>
      <Link to="/Help">Contact</Link>
      
    </div>
  );
};

export default Navbar;
