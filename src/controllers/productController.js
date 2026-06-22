import Product from "../model/productModel.js";
import cloudinary from "../config/cloudinaryConfig.js";
import upload from "../middlewares/fileUpload.js";
import fs from "fs"; 
export const createProduct = async (req, res) => {
  try {
    const {
      productName,
      productPrice,
      productDescription,
      productCategory,
      productImage
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Upload file from local path to Cloudinary
    const uploadedImage  = await cloudinary.uploader.upload(req.file.path, {
      folder: "uploads",
    });

    // Delete file from local server after upload
       upload.deleteFile(req.file.path);

    const product = new Product({
      productName,
      productPrice,
      productDescription,
      productCategory,
      productImage:uploadedImage.secure_url
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


export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Products retrieved successfully",
      data: products
    });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving products",
      error: error.message
    });
  }
};  
    