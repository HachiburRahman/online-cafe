import FoodCard from "@/cards/FoodCard";
import React from "react";
import { resolve } from "styled-jsx/css";
export const instant = false;
const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );
  const data =await res.json();
  await new Promise(resolve=>setTimeout(resolve,3000))
  return data.foods || [];
};
const FoodsPage = async () => {
  const foods = await getFoods();
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        Total <span className="text-orange-400">{foods.length}</span> Foods Found
        <div className="grid grid-cols-3 gap-3">
            {
                foods.map(food=><FoodCard key={food.id} food={food}></FoodCard>)
            }
        </div>
      </h1>
    </div>
  );
};

export default FoodsPage;
