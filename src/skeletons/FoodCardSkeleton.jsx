
import React from "react";

const FoodCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 animate-pulse">

      {/* Image Skeleton */}
      <div className="h-44 bg-gray-200"></div>

      {/* Content Skeleton */}
      <div className="p-4">

        {/* Category and ID */}
        <div className="flex justify-between items-center mb-2">
          <div className="h-5 w-16 bg-gray-200 rounded-full"></div>
          <div className="h-4 w-12 bg-gray-200 rounded"></div>
        </div>

        {/* Food Title */}
        <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>

        {/* Price */}
        <div className="h-6 w-20 bg-gray-200 rounded mb-4"></div>

        {/* Buttons */}
        <div className="flex gap-2">
          <div className="flex-1 h-9 bg-gray-200 rounded-lg"></div>
          <div className="flex-1 h-9 bg-gray-200 rounded-lg"></div>
        </div>

      </div>
    </div>
  );
};

export default FoodCardSkeleton;
