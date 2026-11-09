
"use client";

import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(review.likes || 0);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => liked ? prev - 1 : prev + 1);
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">

      {/* User Information */}
      <div className="flex items-center gap-3 mb-4">

        <img
          src={review.photo}
          alt={review.user}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-gray-800">
            {review.user}
          </h3>

          <div className="flex gap-1 mt-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < review.rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
                size={13}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-600 text-sm leading-relaxed mb-5">
        {review.review}
      </p>

      {/* Like Button */}
      <div className="flex items-center justify-between border-t border-gray-100 pt-3">

        <button
          onClick={handleLike}
          className={`flex items-center gap-2 text-sm font-medium transition ${
            liked ? "text-red-500" : "text-gray-500 hover:text-red-500"
          }`}
        >
          {liked ? <FaHeart /> : <FaRegHeart />}
          {liked ? "Liked" : "Like"}
        </button>

        <span className="text-gray-400 text-sm">
          {likes} Likes
        </span>

      </div>
    </div>
  );
};

export default ReviewCard;
