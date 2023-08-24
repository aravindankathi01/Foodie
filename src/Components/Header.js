import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FoodieDarlings from "../assets/Foodie Darlings.jpg";
const Header = ({ children }) => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  // console.log(cartItems);

  return (
    <div className='flex flex-row w-full h-20 justify-evenly box-border py-6 items-center bg-white shadow-lg sticky top-0 z-50 overflow-clip'>
      <Link
        to='/'
        className='flex flex-row gap-2 items-center justify-evenly w-full md:basis-1/3 basis-1/2'>
        <img
          className='h-14 w-14 rounded-full object-fill mr-12 sm:mr-0'
          src={FoodieDarlings}
          alt='not found'></img>{" "}
        <p className='text-slate-800 font-semibold hover:text-orange-500 hidden sm:inline'>
          Hyderabad,Telangana,India
        </p>
      </Link>
      <div className='md:flex justify-evenly basis-2/3 text-slate-800 font-semibold hidden'>
        <div className='flex gap-1 hover:text-orange-500 active:text-orange-700 focus:outline-none focus:ring focus:ring-violet-300'>
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
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
          <Link to='/search'>
            <p>Search</p>
          </Link>
        </div>
        <div className='flex gap-1 hover:text-orange-500'>
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
              d='M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
            />
          </svg>
          <p>Offers</p>
        </div>
        <div className='flex gap-1 hover:text-orange-500'>
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
              d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
            />
          </svg>
          <p>Help</p>
        </div>
        <div className='flex gap-1 hover:text-orange-500'>
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
              d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
            />
          </svg>
          <p>Bairi</p>
        </div>
        <div className='flex gap-1 hover:text-orange-500 cursor-pointer relative'>
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
              d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
            />
          </svg>
          <div className='text-black rounded-full h-5 w-5 flex items-center justify-center text-xs absolute top-1.5 left-0.5 font-bold'>
            {cartItems.length}
          </div>
          <Link to='/cart'>Cart</Link>
        </div>
      </div>
      <div className='md:hidden flex justify-end basis-1/2 gap-3 pr-5'>
        <Link to='/search'>
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
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </Link>
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
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
