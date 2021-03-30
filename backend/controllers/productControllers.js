import Products from "../models/productModel.js";

const getProducts = async (req, res) => {
  try {
    const products = await Products.find({});

    res.send(products);
  } catch (error) {
    console.log(error);
  }
};

const getProductsById = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);

    res.send(product);
  } catch (error) {
    console.log(error);
  }
};

export { getProducts, getProductsById };
