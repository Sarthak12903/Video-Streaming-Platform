import mongoose from "mongoose";
// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "../env",
});
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR : ", error);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server Is Runnning On ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MongoDb connection failed !!! ${err}`);
  });

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
