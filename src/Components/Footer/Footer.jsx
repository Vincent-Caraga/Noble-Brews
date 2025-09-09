import React from "react";
import "../../assets/CSS/Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <img src={assets.logo} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
