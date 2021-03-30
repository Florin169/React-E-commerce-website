import express from "express";
import dotenv from "dotenv";
import Products from "./models/productModel.js";
import connectDB from "./config/db.js";
import {
  getProducts,
  getProductsById,
} from "./controllers/productControllers.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Running....");
});

app.get("/products", getProducts);

app.get("/products/:id", getProductsById);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
