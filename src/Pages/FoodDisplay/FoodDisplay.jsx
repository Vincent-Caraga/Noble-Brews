import React from "react";
import { food_list } from "../../assets/menu_list";

const FoodDisplay = ({ category }) => {
  return (
    <div className="food-display" id="food-display">
      <h2 className="text-xl font-semibold mb-4">Best-Seller food</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {food_list
          .filter((item) => item.category === category)
          .map((food) => (
            <div
              key={food._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium">{food.name}</h3>
                <p className="text-sm text-gray-500">{food.description}</p>
                <p className="mt-2 font-semibold">₱{food.price}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
