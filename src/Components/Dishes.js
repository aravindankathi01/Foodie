import React from "react";
import Dish from "./Dish";

const Dishes = ({ dishesData }) => {
  return (
    <div className='lg:w-8/12 w-10/12 grid grid-cols-1 lg:grid-cols-2 bg-slate-100 mt-4'>
      {dishesData.map((dish, index) => {
        if (index !== 0) {
          return (
            <Dish
              key={dish?.card?.card?.info?.id}
              dishInfo={dish?.card?.card?.info}
              restaurantInfo={dish?.card?.card?.restaurant?.info}
            />
          );
        }
      })}
    </div>
  );
};

export default Dishes;
