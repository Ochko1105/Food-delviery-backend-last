import mongoose, { Schema, model, models } from "mongoose";
import { Dishesinfo, DishesSchemaType } from "./Category";

export type OrderfoodType = {
  email: string;
  foodOrderitems: [DishesSchemaType];
  status: "DELIVERED" | "CANCELED" | "PENDING";
  totalprice: number;
  address: string;
};

const Foods = new Schema({
  count: Number,
  food: Dishesinfo,
});

const OrderfoodSchema = new Schema(
  {
    email: String,
    totalprice: Number,
    foodOrderitems: [Foods],
    status: {
      type: String,
      enum: ["DELIVERED", "CANCELED", "PENDING"],
      default: "PENDING",
    },
    address: String,
  },
  { timestamps: true }
);

const OrderedFood =
  models.OrderedFood || model<OrderfoodType>("OrderedFood", OrderfoodSchema);

export default OrderedFood;
