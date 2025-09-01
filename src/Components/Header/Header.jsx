import React from "react";
import "../../assets/CSS/Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <section className="header">
      <div className="coffee-shop">
        <img src={assets.image_1} alt="coffee shop" />
      </div>
      <div className="description">
        <p>
          Elevating every day with expertly crafted, rich, and truly affordable
          coffee, everywhere — one noble brew at a time.
        </p>
      </div>
      <div className="know-more">
        <span>KNOW MORE</span>
      </div>
    </section>
  );
};

export default Header;
