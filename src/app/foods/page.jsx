import FoodCard from "@/cards/FoodCard";
import React from "react";
import { resolve } from "styled-jsx/css";
import CartItems from "./CartItems";
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
        </h1>
        <div className="flex gap-5">
          <div className="grid grid-cols-3 gap-3">
            {
                foods.map(food=><FoodCard key={food.id} food={food}></FoodCard>)
            }
        </div>
        <div className="border-2 border-gray-500 p-3 w-[250px] rounded-2xl">
          <h1>Items Added</h1><hr />
          <CartItems></CartItems>
        </div>
        </div>
    </div>
  );
};

export default FoodsPage;
