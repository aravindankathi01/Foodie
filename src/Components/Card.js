import React from "react";
import { cloudinary } from "../constants/config";
const Card = ({ info }) => {
  // console.log(">>", info);
  const {
    name,
    avgRating,
    cloudinaryImageId,
    locality,
    cuisines,
    aggregatedDiscountInfoV3,
  } = info;
  const backgroundImageStyle = {
    backgroundImage: `url(${cloudinary}${cloudinaryImageId})`,
  };
  return (
    <div className='h-[16rem] w-56 box-border flex flex-col shadow-lg rounded-lg bg-white transition ease-in-out delay-150 hover:-translate-y-1 duration-300 hover:scale-90'>
      {/* <div
        className='object-cover h-1/2 rounded-xl'
        style={backgroundImageStyle}></div> */}
      <img
        className='object-cover h-3/5 w-full rounded-xl'
        src={cloudinary + cloudinaryImageId}
        alt='not found'></img>
      <div className='pt-1 pl-2'>
        <h3 className='text-slate-600 font-bold truncate'>{name}</h3>
        <div className='flex'>
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
          <p className='text-slate-800 font-semibold'>{avgRating}</p>
        </div>
        <p className='text-slate-500 font-normal truncate'>
          {cuisines.join(",")}
        </p>
        <p className='text-slate-500 font-normal truncate'>{locality}</p>
      </div>
    </div>
  );
};

export default Card;
