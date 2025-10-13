import mongoose, { Schema } from "mongoose";

type CategorySchemaType = {
  name: string;
  id: any;
};
type DishesSchemaType = {
  name: string;
  ingredients: string;
  price: number;
  category: string;
  image: string;
};

const CategorySchema = new Schema({
  id: Object,
  name: String,
});
const Dishesinfo = new Schema({
  id: Object,
  name: String,
  ingredients: String,
  price: Number,
  category: String,
  image: String,
});

export const Category =
  mongoose.models.Category ||
  mongoose.model<CategorySchemaType>("Category", CategorySchema);

export const Dishes =
  mongoose.models.Dishes ||
  mongoose.model<DishesSchemaType>("Dishes", Dishesinfo);
