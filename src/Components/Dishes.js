import React, { useState } from "react";
import Dish from "./Dish";
import {
  compareItemsByPrice,
  compareItemsByPriceHL,
  sortDeliveryTime,
  ratingHL,
} from "../utils/filter";

const Dishes = ({ dishesData }) => {
  const [filteredDishesData, setFilteredDishesData] = useState(dishesData);
  const [filterType, setFilterType] = useState("");

  return (
    <>
      <div className='flex flex-row justify-center gap-3 text-slate-500 font-medium text-sm lg:w-8/12 w-10/12 flex-wrap sticky top-[180px] z-10 bg-white p-4'>
        <button
          onClick={() => {
            setFilterType("PHL");
            const slicedArray = dishesData.slice(1);
            slicedArray.sort(compareItemsByPrice);
            setFilteredDishesData(slicedArray);
          }}
          className={
            "border-[1px] rounded-lg p-1" +
            (filterType === "PHL"
              ? " bg-orange-50 border-orange-300"
              : " bg-slate-50 border-slate-100")
          }>
          Price(High-Low)
        </button>
        {/* <button className='border-2 border-slate-100 bg-slate-50 rounded-lg p-1'>
          Rated 4+
        </button> */}
        <button
          onClick={() => {
            const slicedArray = dishesData.slice(1);
            slicedArray.sort(compareItemsByPriceHL);
            setFilteredDishesData(slicedArray);
            setFilterType("PLH");
          }}
          className={
            "border-[1px] rounded-lg p-1" +
            (filterType === "PLH"
              ? " bg-orange-50 border-orange-300"
              : " bg-slate-50 border-slate-100")
          }>
          Price(Low-High)
        </button>
        <button
          onClick={() => {
            const slicedArray = dishesData.slice(1);
            slicedArray.sort(sortDeliveryTime);
            setFilteredDishesData(slicedArray);
            setFilterType("DT");
          }}
          className={
            "border-[1px] rounded-lg p-1" +
            (filterType === "DT"
              ? " bg-orange-50 border-orange-300"
              : " bg-slate-50 border-slate-100")
          }>
          Delivery Time
        </button>
        <button
          onClick={() => {
            const slicedArray = dishesData.slice(1);
            slicedArray.sort(ratingHL);
            setFilteredDishesData(slicedArray);
            setFilterType("RHL");
          }}
          className={
            "border-[1px] rounded-lg p-1" +
            (filterType === "RHL"
              ? " bg-orange-50 border-orange-300"
              : " bg-slate-50 border-slate-100")
          }>
          Rating(High-Low)
        </button>
      </div>
      <div className='lg:w-8/12 w-10/12 grid grid-cols-1 lg:grid-cols-2 bg-slate-100 mt-4'>
        {filteredDishesData.map((dish, index) => {
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
    </>
  );
};

export default Dishes;
