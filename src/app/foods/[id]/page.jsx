export const instant=false
import React from "react";
import Link from "next/link";

const getFoodDetails = async (id) => {
  try {
    const res = await fetch(
      `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    return data.details || null;

  } catch (error) {
    console.log("Error fetching food:", error);
    return null;
  }
};

const FoodDetailsPage = async ({ params }) => {
  const { id } = await params;

  const foodDetails = await getFoodDetails(id);

  // Food not found
  if (!foodDetails) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Food Not Found!
        </h1>

        <Link
          href="/foods"
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg"
        >
          Back to Foods
        </Link>
      </div>
    );
  }

  // Image URL
  const imageUrl = Array.isArray(foodDetails.foodImg)
    ? foodDetails.foodImg[0]
    : foodDetails.foodImg;

  // YouTube Video URL
  const videoUrl = Array.isArray(foodDetails.video)
    ? foodDetails.video[0]
    : foodDetails.video;

  // Extract YouTube video ID
  const videoId = videoUrl?.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/
  )?.[1];

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">

      {/* Back Button */}
      <Link
        href="/foods"
        className="inline-block text-indigo-600 hover:text-indigo-800 font-medium mb-6"
      >
        ← Back to Foods
      </Link>

      {/* Food Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Food Image */}
        <div className="overflow-hidden rounded-2xl shadow-md">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={foodDetails.title}
              className="w-full h-80 md:h-full min-h-80 object-cover"
            />
          )}
        </div>

        {/* Food Information */}
        <div className="flex flex-col justify-center">

          {/* Category and Area */}
          <div className="flex gap-3 mb-5">
            <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
              {foodDetails.category}
            </span>

            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
              {foodDetails.area}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {foodDetails.title}
          </h1>

          {/* Description */}
          <p className="text-gray-500 leading-relaxed mb-6">
            Enjoy our delicious {foodDetails.title}, prepared
            with care for a wonderful dining experience.
          </p>

          {/* Price */}
          <p className="text-3xl font-bold text-indigo-600 mb-7">
            ৳ {foodDetails.price}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition">
              Add to Cart
            </button>

            <Link
              href="/foods"
              className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium transition"
            >
              Explore More
            </Link>

          </div>
        </div>
      </div>

      {/* YouTube Video */}
      {videoId && (
        <div className="mt-14">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Cooking Tutorial
          </h2>

          <div className="max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`${foodDetails.title} Cooking Tutorial`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

        </div>
      )}

    </div>
  );
};

export default FoodDetailsPage;
