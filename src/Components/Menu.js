import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuAccordian from "./MenuAccordian";
import Shimmer from "./shimmer";

const Menu = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState(null);
  const [categories, setCategories] = useState(null);
  const [displayItems, setDisplayItems] = useState(true);
  const [displayIndex, setDisplayIndex] = useState(0);

  useEffect(() => {
    fetchMenuData();
  }, []);
  async function fetchMenuData() {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      const data = await response.json();
      // console.log("Menu Data >>>>", data);
      console.log("Actual Menu Data", data?.data?.cards);
      const filteredCategories =
        data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (item) => {
            if (
              item?.card?.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            ) {
              return item;
            }
          }
        );
      setMenu(data?.data?.cards);
      setCategories(filteredCategories);
      // console.log(">>>Categoris", filteredCategories);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
  // console.log(menu[0]?.card?.card?.info);
  if (menu) {
    var { name, cuisines, areaName, avgRatingString, totalRatingsString } =
      menu[0]?.card?.card?.info;
  }

  return (
    <div className='w-full border-4 flex flex-col justify-center items-center'>
      <div className='grid place-items-start mt-8 w-7/12'>
        {menu && (
          <div className='border-dotted border-b-2 border-b-slate-300 w-11/12 h-28 m-2 p-2 box-border flex justify-between'>
            <div>
              <h1 className='text-2xl font-bold text-slate-900 mb-2'>{name}</h1>
              <h1 className='text-md text-slate-900'>{areaName}</h1>
              <p className='text-sm text-slate-700 font-normal'>
                {cuisines.join(",")}
              </p>
            </div>
            <div className='border-2 border-slate-100 h-20 w-24 rounded-lg shadow-lg'>
              <div className='text-orange-500 font-medium text-lg border-b-2 border-b-slate-100 h-1/2 w-3/4 m-auto flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 fill-orange-500 stroke-orange-500'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
                  />
                </svg>
                <p>{avgRatingString}</p>
              </div>
              <p className='text-slate-400 font-medium text-sm flex items-center justify-center'>
                {totalRatingsString}
              </p>
            </div>
          </div>
        )}
        {categories &&
          categories.map((item, index) => {
            return (
              <MenuAccordian
                key={index}
                {...item.card.card}
                displayItems={displayIndex === index && displayItems}
                setDisplayIndex={() => {
                  setDisplayIndex(index);
                  if (displayIndex === index) {
                    setDisplayItems(!displayItems);
                  } else {
                    setDisplayItems(true);
                  }
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Menu;
