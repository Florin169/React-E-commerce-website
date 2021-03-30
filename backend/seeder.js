import mongoose from "mongoose";
import connectDB from "./config/db.js";
import data from "./data.js";
import Products from "./models/productModel.js";

connectDB();

const importData = async () => {
  try {
    await Products.deleteMany();

    await Products.insertMany(data);

    console.log("Data imported");
  } catch (error) {
    console.log(error);
  }
};

const destroyData = async () => {
  try {
    await Products.deleteMany();

    console.log("Destroyed data");
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
