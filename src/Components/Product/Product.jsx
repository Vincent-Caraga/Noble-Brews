import React from "react";
import "../../assets/CSS/Product.css";
import { assets } from "../../assets/assets";

const Product = () => {
  return (
    <section className="products">
      <div className="product-container">
        <div id="first-box">
          <h2>MADE WITH 100% ARABICA BEANS</h2>
          <p>Our espresso-based beverages are made with 100% Arabica beans.</p>
        </div>
        <div id="second-box">
          <img src={assets.arabica} alt="arabica beans" />
        </div>
        <div id="third-box">
          <h2>FRESHLY MADE PER ORDER</h2>
          <p>
            Prepared by trained baristas with no short cuts. Beans are freshly
            ground and the espresso is freshly pulled per order.
          </p>
        </div>
        <div id="fourth-box">
          <img src={assets.image_2} alt="" />
        </div>

        <div id="fifth-box">
          <h2>DOUBLE SHOT OF ESPRESSO</h2>
          <p>
            Each cup is made with a double shot of espresso (including our
            regular sized beverages), giving just the right amount of kick to
            pick you up.
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
