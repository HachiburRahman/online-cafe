
import React from "react";

const FoodDetailsSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 py-10 animate-pulse">

      {/* Back Button */}
      <div className="h-5 w-32 bg-gray-200 rounded mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Image Skeleton */}
        <div className="h-80 bg-gray-200 rounded-2xl"></div>

        {/* Information Skeleton */}
        <div className="flex flex-col justify-center">

          {/* Category and Area */}
          <div className="flex gap-3 mb-5">
            <div className="h-7 w-20 bg-gray-200 rounded-full"></div>
            <div className="h-7 w-24 bg-gray-200 rounded-full"></div>
          </div>

          {/* Title */}
          <div className="h-9 w-3/4 bg-gray-200 rounded mb-4"></div>

          {/* Description */}
          <div className="space-y-3 mb-6">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
          </div>

          {/* Price */}
          <div className="h-9 w-28 bg-gray-200 rounded mb-7"></div>

          {/* Buttons */}
          <div className="flex gap-3">
            <div className="h-12 w-36 bg-gray-200 rounded-lg"></div>
            <div className="h-12 w-36 bg-gray-200 rounded-lg"></div>
          </div>

        </div>
      </div>

      {/* Video Skeleton */}
      <div className="mt-12">
        <div className="h-7 w-64 bg-gray-200 rounded mb-5"></div>
        <div className="aspect-video max-w-3xl bg-gray-200 rounded-2xl"></div>
      </div>

    </div>
  );
};

export default FoodDetailsSkeleton;
