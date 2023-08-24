import React from "react";
import { cloudinary } from "../constants/config";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
const CategoryItems = (props) => {
  const { description, name, imageId, price, defaultPrice } = props;
  const dispatch = useDispatch();
  return (
    <div className='border-b-2 border-b-slate-300 w-full flex my-2 p-2 md:justify-between flex-col justify-center items-center md:flex-row'>
      <div className='md:text-start md:w-9/12 text-center'>
        <h1 className='font-medium text-base text-slate-700'>{name}</h1>
        <p className='text-slate-600 text-sm font-medium'>
          ₹{price ? price / 100 : defaultPrice / 100}
        </p>
        <p className='text-slate-400 text-xs font-normal mt-4'>{description}</p>
      </div>
      <div className='md:w-3/12 flex justify-center items-center relative p-1'>
        <img
          className='h-28 w-32 rounded-lg shadow-xl object-fill'
          src={cloudinary + imageId}
          alt='notfound'></img>
        {!props.showDelete ? (
          <span
            onClick={() => {
              dispatch(addItem(props));
            }}
            className='left-auto right-auto text-xs font-bold absolute border-2 border-slate-200 bg-white text-orange-500 -bottom-2 rounded-md hover:shadow-lg cursor-pointer h-8 w-14 flex justify-center items-center'>
            ADD +
          </span>
        ) : (
          <span
            onClick={() => {
              dispatch(removeItem(imageId));
            }}
            className='left-auto right-auto text-xs font-bold absolute border-2 border-slate-200 bg-white text-orange-500 -bottom-2 rounded-md hover:shadow-lg cursor-pointer h-8 w-16 p-1 flex justify-center items-center'>
            REMOVE-
          </span>
        )}
      </div>
    </div>
  );
};

export default CategoryItems;
