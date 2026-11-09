
import React from "react";

const ReviewCardSkeleton = () => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm animate-pulse">

      {/* User Information */}
      <div className="flex items-center gap-3 mb-4">

        <div className="w-12 h-12 rounded-full bg-gray-200"></div>

        <div className="flex-1 space-y-2">
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
          <div className="h-3 w-24 bg-gray-200 rounded"></div>
        </div>

      </div>

      {/* Review Text */}
      <div className="space-y-2 mb-5">
        <div className="h-3 w-full bg-gray-200 rounded"></div>
        <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
        <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
      </div>

      {/* Like Button */}
      <div className="flex justify-between items-center border-t border-gray-100 pt-3">
        <div className="h-4 w-14 bg-gray-200 rounded"></div>
        <div className="h-4 w-16 bg-gray-200 rounded"></div>
      </div>

    </div>
  );
};

export default ReviewCardSkeleton;
