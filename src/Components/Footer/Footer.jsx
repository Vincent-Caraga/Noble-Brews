import React from "react";
import "../../assets/CSS/Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <img src={assets.logo} alt="" />
        <h1>THE NOBLE BREWS</h1>
        <h2>GET OUR BEST COFFEE NOW</h2>
        <img className="socmed" src={assets.facebook} alt="facebook" />
        <img className="socmed" src={assets.instagram} alt="instagram" />
      </div>

      <div className="footer-right">
        <ul>
          <li>OUR COMPANY</li>
          <li>ABOUT US</li>
          <li>NEWS</li>
          <li>OUR STORIES</li>
          <li>PRIVACY POLICY</li>
          <li>TERMS OF USE</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
