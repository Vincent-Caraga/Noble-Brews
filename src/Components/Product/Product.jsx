import React from "react";
import "../../assets/CSS/Product.css";
import { assets } from "../../assets/assets";

const Product = () => {
  return (
    <section className="products">
      <div className="product-container">
        <div id="first-box">
          <h2>Crafted from the Finest Arabica Beans</h2>
          <p>
            Every sip begins with a journey—handpicked from high-altitude farms
            where Arabica beans thrive in rich soil and cool climates.
          </p>
        </div>
        <div id="second-box">
          <img src={assets.arabica} alt="arabica beans" />
        </div>
        <div id="third-box">
          <h2>Made Just for You, Every Time</h2>
          <p>
            No batches. No shortcuts. Every cup is crafted the moment you
            order—because you deserve coffee that’s as fresh as your day is new.
            From bean to brew, it’s a personal ritual of flavor and intention.
          </p>
        </div>
        <div id="fourth-box">
          <img src={assets.image_2} alt="" />
        </div>

        <div id="fifth-box">
          <h2>Twice the Boldness, Zero Compromise</h2>
          <p>
            This isn’t your average pick-me-up. Our double shot of espresso
            delivers a concentrated burst of flavor and energy—rich, robust, and
            unapologetically strong.
          </p>
        </div>
        <div id="sixth-box">
          <img src={assets.image_3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Product;
