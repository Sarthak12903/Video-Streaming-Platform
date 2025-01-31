import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
  } catch (error) {
    console.log(`Error in Connection : ${error}`);
    process.exit(1);
  }
};
