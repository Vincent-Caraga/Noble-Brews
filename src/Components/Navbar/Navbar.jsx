import React, { useState } from "react";
import "../../assets/CSS/Navbar.css";
import { assets } from "../../assets/assets";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img src={assets.logo} alt="the noble-brews logo" />
          </Link>
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/about-us" onClick={() => setIsOpen(false)}>
            ABOUT US
          </Link>

          <Link to="/our-menu" onClick={() => setIsOpen(false)}>
            OUR MENU
          </Link>

          <a href="#news" onClick={() => setIsOpen(false)}>
            NOBLE BREWS NEWS
          </a>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </nav>

      <div className="marquee-text">
        <div className="marquee_inner">
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
          <span>WELCOME TO THE NOBLE BREWS &nbsp; | &nbsp;</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
