import React from "react";
import { cloudinary } from "../constants/config";
import { Link } from "react-router-dom";

const Restaurant = ({
  name,
  id,
  avgRating,
  cuisines,
  cloudinaryImageId,
  costForTwo,
  costForTwoMessage,
  sla,
}) => {
  return (
    <Link
      to={"/Menu/" + id}
      className='flex flex-col md:flex-row shadow-lg rounded-lg border-2 bg-white items-center justify-center p-2'>
      <div className='basis-2/6 flex items-center justify-center md:w-2/6'>
        <img
          src={cloudinary + cloudinaryImageId}
          alt='Dish'
          className='h-28 w-32 rounded-lg shadow-xl object-fill'></img>
      </div>
      <div className='basis-4/6 p-2 md:w-4/6 text-center md:text-start w-full'>
        <p className='text-sm font-bold text-slate-700'>{name}</p>
        <div className='flex md:flex-row flex-col text-slate-500 font-medium text-sm'>
          <div className='flex flex-row justify-center md:text-start'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={0}
              stroke='currentColor'
              className='w-6 h-6 px-1 pb-1 fill-orange-500'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
              />
            </svg>
            <p>{avgRating}</p>
          </div>
          <div className='flex flex-col md:flex-row truncate text-center md:text-start'>
            <p className='border-[1px] h-[2px] w-[2px] rounded-full border-slate-600 mt-2 mx-[7px] hidden md:inline'></p>
            <p className='truncate'>{sla?.slaString}</p>
            <p className='border-[1px] h-[2px] w-[2px] rounded-full border-slate-600 mt-2 mx-[7px] hidden md:inline'></p>

            <p className='truncate'> {costForTwoMessage || costForTwo}</p>
          </div>
        </div>
        <p className='text-slate-400 text-sm font-normal line-clamp-2'>
          {cuisines.join(",")}
        </p>
      </div>
    </Link>
  );
};

export default Restaurant;

// sla
// :
// deliveryTime
// :
// 36
// iconType
// :
// "ICON_TYPE_EMPTY"
// lastMileTravelString
// :
// "5.0 km"
// maxDeliveryTime
// :
// 36
// minDeliveryTime
// :
// 36
// serviceability
// :
// "SERVICEABLE"
// slaString
// :
// "36 MINS"
