import React from "react";
import { cloudinary } from "../constants/config";

const CategoryItems = ({ description, name, imageId, price, defaultPrice }) => {
  return (
    <div className='border-b-2 border-b-slate-300 w-full flex my-2 p-2 justify-between'>
      <div className='text-start w-9/12'>
        <h1 className='font-medium text-base text-slate-700'>{name}</h1>
        <p className='text-slate-600 text-sm font-medium mt-2'>
          ₹{price ? price / 100 : defaultPrice / 100}
        </p>
        <p className='text-slate-400 text-xs font-normal'>{description}</p>
      </div>
      <div className='w-3/12 flex justify-end relative'>
        <img
          className='w-3/4 h-24 shadow-lg rounded-lg'
          src={cloudinary + imageId}
          alt='notfound'></img>
        <span className='text-xs font-bold absolute border-2 border-slate-200 bg-white text-orange-500 -bottom-2 right-9 rounded-md hover:shadow-lg cursor-pointer h-8 w-14 flex items-center justify-center'>
          ADD +
        </span>
      </div>
    </div>
  );
};

export default CategoryItems;
