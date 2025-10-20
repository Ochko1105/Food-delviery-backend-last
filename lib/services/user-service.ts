import { User } from "../models/User";
import connectDB from "../mongodb";

export const createUser = async (
  email: string,
  password: string,
  role: string
) => {
  await connectDB();
  const newUser = new User({ email, password, role });

  await newUser.save();
  return newUser;
};
export const getUsers = async () => {
  await connectDB();
  return await User.find();
};
export const findUser = async (email: string, password: string) => {
  await connectDB();
  const user = await User.findOne({ email, password });
  if (user) {
    return true;
  } else {
    return false;
  }
};
