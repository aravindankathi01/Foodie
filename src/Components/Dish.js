import React from "react";
import { Link } from "react-router-dom";
import { cloudinary } from "../constants/config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const Dish = ({ dishInfo, restaurantInfo }) => {
  const { name, price, imageId, description, defaultPrice } = dishInfo;
  const dispatch = useDispatch();
  return (
    <div className='shadow-lg mx-3 mt-6 bg-white flex flex-col rounded-lg'>
      <Link
        to={"/Menu/" + restaurantInfo.id}
        className='basis-2/6 flex flex-row justify-between items-center cursor-pointer p-4 border-b-2 border-dotted'>
        <div>
          <p className='text-sm font-bold text-gray-500'>
            By {restaurantInfo?.name}
          </p>
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={0}
              stroke='currentColor'
              className='w-6 h-6 p-1 fill-orange-500'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
              />
            </svg>
            <p className='text-gray-500 text-sm font-medium'>
              {restaurantInfo?.avgRating}
            </p>
            <p className='border-[1px] h-[2px] w-[2px] rounded-full border-slate-600 mt-2 mx-[7px]'></p>
            <p className='truncate text-sm font-medium text-gray-500'>
              {restaurantInfo?.sla?.slaString}
            </p>
          </div>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1}
          stroke='currentColor'
          className='w-6 h-6'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
          />
        </svg>
      </Link>
      <div className='basis-4/6 flex md:flex-row justify-between p-4 gap-2 flex-col text-center md:text-start'>
        <div className='basis-4/6'>
          <p className='text-lg font-semibold text-slate-800'>{name}</p>
          <p className='text-slate-600 text-sm font-medium'>
            ₹{price ? price / 100 : defaultPrice / 100}
          </p>
          <p className='text-slate-400 text-xs font-normal mt-4 line-clamp-3'>
            {description}
          </p>
        </div>
        <div className='basis-2/6 flex items-center justify-center relative h-28'>
          <img
            src={cloudinary + imageId}
            alt='Dish'
            className='h-28 w-32 rounded-lg shadow-xl object-fill'></img>
          <span
            onClick={() => {
              dispatch(addItem(dishInfo));
            }}
            className='left-auto right-auto text-xs font-bold absolute border-2 border-slate-200 bg-white text-orange-500 -bottom-2 rounded-md hover:shadow-lg cursor-pointer h-8 w-14 flex justify-center items-center'>
            ADD+
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dish;
