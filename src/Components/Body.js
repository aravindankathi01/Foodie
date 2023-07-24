import React, { useEffect, useState } from "react";
// import Header from "./Header";
import Card from "./Card";
import Shimmer from "./shimmer";

const Body = () => {
  // const [searchValue, setSearchValue] = useState("");
  const [restaurantsData, setRestaurantsData] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);
  async function fetchRestaurants() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await response.json();
      console.log(">>> entire", data);
      setRestaurantsData(
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log(
        "actual",
        data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // console.log(data);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  return (
    <div className='bg-white h-full'>
      {/* <Header>
        <div className='flex'>
          <input
            className='h-8 rounded-l-full p-2 shadow-lg outline-orange-500 w-72'
            name=''
            value={searchValue}
            placeholder='Search Restaurants and Food'
            id='Search'
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}></input>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-10 h-8 bg-white rounded-r-full shadow-lg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </div>
      </Header> */}
      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-2 lg:grid-cols-4 w-3/4 gap-y-4 gap-x-2 mt-4'>
          {restaurantsData.length ? (
            restaurantsData.map((item) => {
              return <Card info={item?.info} key={item?.info?.id} />;
            })
          ) : (
            <Shimmer />
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
