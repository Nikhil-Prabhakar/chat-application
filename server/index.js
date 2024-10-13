import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.nextTick.PORT || 3001;
const databaseURL = process.env.DATABASE_URL;

app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

const server = app.listen(port, () => {
  console.log(`Server is runnning at http://localhost:${port}`);
});

mongoose
  .connect(databaseURL)
  .then(() => console.log("DB Connection Successfull."))
  .catch((err) => console.log(err.message));
