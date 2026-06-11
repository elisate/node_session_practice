import {createProduct} from "../controllers/productController.js"
import upload from "../middlewares/fileUpload.js";
import express from "express"

const productRouter=express();


productRouter.post("/createProduct",upload.single("productImage"),createProduct)
export default productRouter