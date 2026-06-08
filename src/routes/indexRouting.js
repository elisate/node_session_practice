import productRouter from "./productRouter.js";
import contactRouter from "./contactRouter.js";
import { Router } from "express";

const mainRouter=Router();
mainRouter.use("/product",productRouter)
mainRouter.use("/contact",contactRouter)

export default mainRouter;