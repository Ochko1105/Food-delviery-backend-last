import OrderedFood, { OrderfoodType } from "../models/Orderfood";
import { User } from "../models/User";
import connectDB from "../mongodb";

export const createUser = async (
  email: string,
  password: string,
  role: string
) => {
  await connectDB();
  const newUser = new User({ email, password, role });

  const result = await newUser.save();

  return true;
};
export const getUsers = async () => {
  await connectDB();
  return await User.find();
};
export const findUser = async (email: string) => {
  await connectDB();
  const user = await User.findOne({ email });

  if (user) {
    return user;
  } else {
    return false;
  }
};
export const CreateFoodOrder = async (Orderfood: OrderfoodType) => {
  await connectDB();

  const newFoodorder = new OrderedFood(Orderfood);
  const result = await newFoodorder.save();
  return result;
};
export const getOrderedFoods = async () => {
  await connectDB();
  return await OrderedFood.find();
};
type Editedstatus = {
  status: string;
};

export const EditStatus = async (foodid: string, newStatus: string) => {
  await connectDB();
  return await OrderedFood.findByIdAndUpdate(
    foodid,
    { status: newStatus },
    { new: true }
  );
};
