import User from "../models/productModel.js";

const getProducts = async (req, res) => {
  try {
    const products = await Products.find({});

    res.send(products);
  } catch (error) {
    console.log(error);
  }
};
