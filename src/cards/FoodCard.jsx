
import React from "react";
import Link from "next/link";
import CartButton from "@/buttons/CartButton";

const FoodCard = ({ food }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group">

      {/* Food Image */}
      <div className="h-44 overflow-hidden">
        <img
          src={food.foodImg}
          alt={food.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Food Information */}
      <div className="p-4">

        <div className="flex justify-between items-center mb-2">
          <span className="bg-indigo-50 text-indigo-600 text-xs font-medium px-2.5 py-1 rounded-full">
            {food.category}
          </span>

          <span className="text-gray-400 text-xs">
            #{food.id}
          </span>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 truncate mb-1">
          {food.title}
        </h2>

        <p className="text-xl font-bold text-indigo-600 mb-4">
          ৳ {food.price}
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-2">

         <CartButton food={food}></CartButton>

          <Link
            href={`/foods/${food.id}`}
            className="flex-1 text-center border border-indigo-600 text-indigo-600 hover:bg-indigo-50 text-sm font-medium py-2 px-3 rounded-lg transition-colors"
          >
            Details
          </Link>

        </div>
      </div>
    </div>
  );
};

export default FoodCard;
