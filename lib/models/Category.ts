import mongoose, { Schema } from "mongoose";

type CategorySchemaType = {
  name: string;
  id: any;
};
export type DishesSchemaType = {
  name: string;
  ingredients: string;
  price: number;
  image: string;
  categorid: string;
};

const CategorySchema = new Schema({
  name: String,
});
export const Dishesinfo = new Schema(
  {
    categorid: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    name: String,
    ingredients: String,
    price: Number,
    image: String,
  },
  {
    timestamps: true,
  }
);

export const Category =
  mongoose.models.Category ||
  mongoose.model<CategorySchemaType>("Category", CategorySchema);

export const Dishes =
  mongoose.models.Dishes ||
  mongoose.model<DishesSchemaType>("Dishes", Dishesinfo);
