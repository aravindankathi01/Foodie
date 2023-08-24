import React, { useEffect, useState } from "react";
// import Header from "./Header";
import Card from "./Card";
import Shimmer from "./shimmer";

const Body = () => {
  // const [searchValue, setSearchValue] = useState("");
  const [restaurantsData, setRestaurantsData] = useState(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  async function fetchRestaurants() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      const filtered = data?.data?.cards.filter((item) => {
        if (
          item?.card?.card?.gridElements?.infoWithStyle["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
        ) {
          return item;
        }
      });
      // console.log(">>filtered", filtered);
      setRestaurantsData(
        filtered[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      console.log("actual", data?.data?.cards);
      // console.log(data);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
  // console.log(">>>>>", restaurantsData);
  return (
    <div className='bg-white w-full'>
      <div className='flex justify-center items-center mt-5 w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-3/4 gap-8 place-content-center place-items-center'>
          {restaurantsData === null || restaurantsData === undefined ? (
            <Shimmer />
          ) : (
            restaurantsData.map((item) => {
              return <Card info={item?.info} key={item?.info?.id} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
