import { Category, Dishes } from "../models/Category";
import connectDB from "../mongodb";

export const createCategory = async (name: string) => {
  await connectDB();
  const newCategory = new Category({ name });
  await newCategory.save();
  return newCategory;
};

export const getAllCategories = async () => {
  await connectDB();
  return await Category.find();
};
type DishesSchemaType = {
  id: any;
  name: string;
  ingredients: string;
  price: number;
  category: string;
  image: string;
};

export const CreatDishesinfo = async (form: DishesSchemaType) => {
  await connectDB();
  const newDishes = new Dishes(form);
  await newDishes.save();
  return newDishes;
};
export const getAllDishesinfo = async () => {
  await connectDB();
  return await Dishes.find();
};
export const deleteCategory = async (id: string) => {
  await connectDB();
  return await Category.findByIdAndDelete(id);
};
export const deletefoodinfo = async (id: string) => {
  await connectDB();
  return await Dishes.findByIdAndDelete(id);
};
