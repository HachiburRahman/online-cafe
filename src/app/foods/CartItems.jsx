"use client"
import { CartContext } from '@/context/CartProvider';
import React, { use } from 'react';

const CartItems = () => {
    const {cart}=use(CartContext)
    return (
        <div>
            <h4>{cart.length} items are added</h4>
        </div>
    );
};

export default CartItems;