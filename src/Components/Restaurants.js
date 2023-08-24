import React from "react";
import Restaurant from "./Restaurant";

const Restaurants = ({ restaurantsData, flag }) => {
  if (flag) {
    return (
      <div className='lg:w-8/12 w-10/12 grid grid-cols-1 md:grid-cols-2 bg-slate-100 mt-4 px-4 gap-3'>
        {restaurantsData.map((item, index) => {
          if (index !== 0) {
            return (
              <Restaurant
                {...item?.card?.card?.restaurant?.info}
                key={item?.card?.card?.info?.id}
              />
            );
          }
        })}
      </div>
    );
  } else if (restaurantsData.length !== 2) {
    return (
      <div className='lg:w-8/12 w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-slate-100 mt-4 gap-3 px-4'>
        {restaurantsData.map((item) => {
          return (
            <Restaurant
              {...item?.card?.card?.info}
              key={item?.card?.card?.info.id}
            />
          );
        })}
      </div>
    );
  }
  // data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards;
  return (
    <div className='lg:w-8/12 w-10/12 grid grid-cols-1 md:grid-cols-2 bg-slate-100 mt-4 gap-3 px-4'>
      <>
        <Restaurant {...restaurantsData[0]?.card?.card?.info} />
        <p></p>
        <h2 className='text-base font-bold text-slate-700 mx-4 mt-10'>
          More results like this
        </h2>
        <p></p>
      </>

      {restaurantsData[1]?.card?.card?.restaurants.map((item) => {
        return <Restaurant {...item?.info} key={item?.info.id} />;
      })}
    </div>
  );
};

export default Restaurants;
