import mongoose, { Schema } from "mongoose";
import { unique } from "next/dist/build/utils";

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["USER", "ADMIN"] },
    address: { type: String },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
