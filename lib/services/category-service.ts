import { Category, Dishes, DishesSchemaType } from "../models/Category";
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

export const CreatDishesinfo = async (form: DishesSchemaType) => {
  await connectDB();
  const newDishes = new Dishes(form);
  await newDishes.save();
  return newDishes;
};
export const getAllDishesinfo = async () => {
  await connectDB();
  return await Dishes.find().populate("categorid");
};
export const deleteCategory = async (id: string) => {
  await connectDB();
  return await Category.findByIdAndDelete(id);
};
export const deletefoodinfo = async (id: string) => {
  await connectDB();
  return await Dishes.findByIdAndDelete(id);
};
export const EditDishesinfo = async (
  foodData: DishesSchemaType,
  foodid: string
) => {
  await connectDB();
  const EditedDishes = await Dishes.findByIdAndUpdate(
    foodid,
    foodData
  ).populate("categorid");

  return EditedDishes;
};
