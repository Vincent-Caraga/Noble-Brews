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

      <div className="mission_container">
        <img src={assets.mission} alt="" />
      </div>

      <div className="logo-carousel-container">
        <h2>FEATURED ON</h2>
        <div className="logo-carousel">
          <img src={assets.booky} alt="booky logo" />
          <img src={assets.manila} alt="when in manila logo" />
          <img src={assets.manila_bulletin} alt="manila bulletin logo" />
          <img src={assets.preview} alt="preview logo" />
          <img src={assets.spot} alt="spot ph logo" />
          <img src={assets.taste_atlas} alt="taste atlas logo" />
          <img src={assets.yummy} alt="yummy logo" />
          <img src={assets.daily} alt="daily inquirer logo" />
          <img src={assets.businessmirror} alt="bm logo" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
