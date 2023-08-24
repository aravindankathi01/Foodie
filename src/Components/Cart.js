import React from "react";
import { useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  const dispatch = useDispatch();
  const price = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);
  return (
    <div className='grid place-items-start mt-8 w-7/12 mx-auto'>
      {cartItems.length !== 0 && (
        <div className='w-full flex justify-center'>
          <button
            onClick={() => {
              dispatch(clearCart());
            }}
            className='m-auto text-base font-semibold border-2 shadow-lg text-orange-500 h-10 rounded-lg p-2'>
            CLEAR CART
          </button>
          <p className='text-base font-semibold text-slate-700 mt-2 pr-3'>
            Total- ₹{price / 100}
          </p>
        </div>
      )}
      {cartItems.map((item) => {
        return <CategoryItems {...item} key={item.id} showDelete={true} />;
      })}
    </div>
  );
};

export default Cart;
