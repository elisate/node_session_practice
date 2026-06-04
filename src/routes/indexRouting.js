import productRouter from "./productRouter.js";
import { Router } from "express";

const mainRouter=Router();
mainRouter.use("/product",productRouter)

export default mainRouter;