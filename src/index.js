import dotenv from "dotenv";
import express from "express";
import connectDb from "./db/index.js";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
const app = express();

dotenv.config();

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection FAILED", error);
  });

// (async () => {
//   try {
//     mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("errror", (error) => {
//       console.log("ERROR", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERRORl", error);
//     throw error;
//   }
// })();
