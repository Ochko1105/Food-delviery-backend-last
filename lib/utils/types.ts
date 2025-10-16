import { Schema } from "mongoose";

export type FoodType = {
  categorid: string;

  name: string;
  ingredients: string;
  image: string;
  price: number;
};
export type EditFoodType = {
  categorid: string;
  foodid: string;
  name: string;
  ingredients: string;
  image: string;
  price: number;
};
