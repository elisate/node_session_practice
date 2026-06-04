import {createProduct} from "../controllers/productController.js"
import express from "express"

const productRouter=express();
productRouter.post("/createProduct",createProduct)
export default productRouter