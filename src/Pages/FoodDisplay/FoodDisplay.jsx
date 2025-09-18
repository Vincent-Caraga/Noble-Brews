import React from "react";
import { food_list } from "../../assets/menu_list";
import "../../assets/CSS/FoodDisplay.css";

const FoodDisplay = ({ category }) => {
  return (
    <div className="food-display" id="food-display">
      <h2>{category === "All" ? "Best-Seller Food" : category}</h2>
      <div className="food-grid">
        {food_list
          .filter((item) => category === "All" || item.category === category)
          .map((food) => (
            <div className="card" key={food._id}>
              <img src={food.image} alt={food.name} />
              <div className="card-details">
                <h3>{food.name}</h3>
                <p>{food.description}</p>
                <p className="price">₱{food.price}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
