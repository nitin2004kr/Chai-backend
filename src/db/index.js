import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "../constant.js";
const app = express();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`Connection Instance = `, connectionInstance);
  } catch (error) {
    console.log(`MONGODB CONNECTION FAILED: ${error}`);
    process.exit(1); // it is nodejs method to exit from running server, it will exit if the database connation faild;
  }
};

export default connectDB; 
