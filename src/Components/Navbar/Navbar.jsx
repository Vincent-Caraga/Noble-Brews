import React from "react";
import "../../assets/CSS/Navbar.css";
import { assets } from "../../assets/assets";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a
            href="/"
            onClick={() => {
              setMenu("");
              setIsOpen(false);
            }}
          >
            <img src={assets.logo} alt="" />
          </a>
        </div>
        {/*Desktop Menu*/}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <a
            href="about-us"
            onClick={() => {
              setMenu("about-us");
              setIsOpen(false);
            }}
            className={menu === "about-us" ? "active" : ""}
          >
            ABOUT-US
          </a>

          <a
            href="menu"
            onClick={() => {
              setMenu("menu");
              setIsOpen(false);
            }}
            className={menu === "menu" ? "active" : ""}
          >
            OUR MENU
          </a>

          <a
            href="news"
            onClick={() => {
              setMenu("news");
              setIsOpen(false);
            }}
            className={menu === "news" ? "active" : ""}
          >
            NOBLE BREWS NEWS
          </a>
        </ul>
        {/* Hamburger Icon*/}
        <div className="hamburger" onClick={toggleMenu}>
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
