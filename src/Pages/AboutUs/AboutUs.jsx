import React from "react";
import { assets } from "../../assets/assets";
import "../../assets/CSS/AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="banner">
        <img src={assets.banner} alt="celebrating 100 branches" />
      </div>

      <div className="description">
        <p>
          Crafting joy through premium coffee, heartfelt service, and community
          spirit — one Noble Brew at a time.
        </p>
      </div>

      <div className="video">
        <video
          className="open_video"
          src={assets.open_video}
          autoPlay
          muted
          loop
          playsInline
          width="100%"
          style={{ display: "block" }}
        />
      </div>
    </>
  );
};

export default AboutUs;
