import React from "react";
import { menu_list } from "../../assets/menu_list";
import "../../assets/CSS/OurMenu.css";
import { useState } from "react";

const OurMenu = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our Coffee and Food</h1>
      <p className="explore-menu-text">
        View all of our best seller coffee and food
      </p>
      <div
        className="explore-menu-list"
        category={category}
        setCategory={setCategory}
      >
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default OurMenu;
