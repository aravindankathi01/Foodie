import React, { useState } from "react";
import CategoryItems from "./CategoryItems";

const MenuAccordian = ({ title, itemCards, displayItems, setDisplayIndex }) => {
  // const [displayItems, setDisplayItems] = useState(true);
  return (
    <div className='w-11/12 m-2 p-2 box-border flex justify-between'>
      <div className='w-full flex flex-col'>
        <div
          className='flex justify-between w-full cursor-pointer'
          onClick={() => {
            setDisplayIndex(!displayItems);
          }}>
          <h1 className='font-bold text-base text-slate-700'>
            {title + ` (${itemCards.length})`}
          </h1>
          {displayItems ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.5 15.75l7.5-7.5 7.5 7.5'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          )}
        </div>
        {displayItems ? (
          <div>
            {itemCards.map((item) => {
              /* console.log(">>>>ITEM CARD", item); */
              return (
                <CategoryItems
                  key={item?.card?.info?.id}
                  {...item?.card?.info}
                />
              );
            })}
          </div>
        ) : (
          <div className=' border-b-slate-200 border-b-8 mt-3'></div>
        )}
      </div>
    </div>
  );
};

export default MenuAccordian;
