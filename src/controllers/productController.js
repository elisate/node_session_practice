import Product from "../model/productModel.js";

export const createProduct = async (req, res) => {
  try {
    const {
      productName,
      productPrice,
      productDescription,
      productCategory
    } = req.body;

    const product = new Product({
      productName,
      productPrice,
      productDescription,
      productCategory
    });

    const savedProduct = await product.save();

    res.status(201).json({
      message: "Product created successfully",
      data: savedProduct
    });

  } catch (error) {
    res.status(500).json({
      message: "Error creating product",
      error: error.message
    });
  }
};