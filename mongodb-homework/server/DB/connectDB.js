import mongoose, { Mongoose } from "mongoose";

export const connectDB = async(uri) => {
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.error(error);
  }
};