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
