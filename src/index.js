import mongoose from "mongoose";
import { DB_NAME } from "./constants";

/*
import express from "express";
const app = express()(
  //IFEE syntax
  async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
      app.on("error", (error) => {
        console.log("App couldnt connect to the databse, ERROR : ", error);
      });

      app.listen(process.env.PORT, () => {
        console.log(`Server is running on ${process.env.PORT}`);
      });
    } catch (error) {
      console.error("ERROR: ", error);
    }
  }
)();
*/
