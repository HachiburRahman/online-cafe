"use client"
import { CartContext } from "@/context/CartProvider";
import React, { use, useState } from "react";

const CartButton = ({food}) => {
    const [inCart,setInCart]=useState(false)
    const {addToCart}=use(CartContext)
    const handleAddToCart=()=>{
        addToCart(food)
        setInCart(true)
    }
  return (
    
      <button disabled={inCart} onClick={handleAddToCart} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors disabled:bg-gray-100 disabled:text-gray-600">
        {
            inCart?"Added":"Add to Cart"
        }
      </button>
     );
};

export default CartButton;
