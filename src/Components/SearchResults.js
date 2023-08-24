import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Restaurants from "./Restaurants";
import Dishes from "./Dishes";

const SearchResults = () => {
  const [restaurantsData, setRestaurantsData] = useState(null);
  const [flag, setFlag] = useState(false); //related to restrau data
  const [dishesData, setDishesData] = useState(null);

  const [toggleRD, setToggleRD] = useState(true);

  useEffect(() => {
    console.log(searchParams.get("query"));
    console.log(searchParams.get("type"));
    if (searchParams.get("type") === "DISH") {
      setToggleRD(false);
    } else {
      setToggleRD(true);
    }
    fetchRestaurants(searchParams.get("query"));
    fetchDishes(searchParams.get("query"));
  }, []);
  useEffect(() => {
    console.log(">>>>Restrau Data", restaurantsData);
    // console.log("Dishes>>>>", dishesData);
  }, [restaurantsData, dishesData]);
  const [searchParams] = useSearchParams();

  async function fetchRestaurants(value) {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.385044&lng=78.486671&str=${value}&trackingId=04cf99d2-e6ef-f1a4-facb-f02bbc5c486a&submitAction=ENTER&queryUniqueId=a8327500-b2c3-5005-118c-5d5cdc19be77`
      );
      const data = await response.json();
      console.log("Restra>>>>", data);
      if (data?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards) {
        setFlag(false);
        setRestaurantsData(
          data?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
        );
      } else {
        setRestaurantsData(
          data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards
        );
        setFlag(true);
      }
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
  async function fetchDishes(value) {
    try {
      const response =
        await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.385044&lng=78.486671&str=${value}&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=15749c86-9171-a73a-47fd-2d3c9c79e043&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NA%22%2C%22cloudinaryId%22%3A%2250a7b6a13177e653720b2a1d53e02958%22%2C%22dishFamilyId%22%3A%22846647%22%2C%22dishFamilyIds%22%3A%5B%22846647%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D
      `);
      const data = await response.json();
      setDishesData(data?.data.cards[1].groupedCard.cardGroupMap.DISH.cards);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
  let dish = "";
  let res = "";
  if (toggleRD) {
    res = "text-white bg-slate-700";
  } else {
    dish = "text-white bg-slate-700";
  }
  return (
    <>
      <div className='w-full flex flex-col justify-center items-center mt-4'>
        <div className='flex flex-row justify-center items-center gap-2 bg-white w-full py-8 sticky top-20'>
          <button
            onClick={() => {
              !toggleRD && setToggleRD(!toggleRD);
            }}
            className={
              "border-2 border-slate-200 text-slate-900 text-base font-medium p-1 px-2 rounded-full " +
              res
            }>
            Restaurants
          </button>
          <button
            onClick={() => {
              toggleRD && setToggleRD(!toggleRD);
            }}
            className={
              "border-2 border-slate-200 text-black text-base font-medium p-1 px-2 rounded-full " +
              dish
            }>
            Dishes
          </button>
        </div>
        {toggleRD
          ? restaurantsData && (
              <Restaurants restaurantsData={restaurantsData} flag={flag} />
            )
          : dishesData && <Dishes dishesData={dishesData} />}
      </div>
    </>
  );
};

export default SearchResults;
