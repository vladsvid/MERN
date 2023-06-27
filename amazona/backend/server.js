import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRoutes from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use("/api/seed", seedRoutes);

app.use("/api/products", productRouter);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`listen in port ${port}`);
});
