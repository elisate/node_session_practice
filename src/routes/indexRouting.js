import productRouter from "./productRouter.js";
import contactRouter from "./contactRouter.js";
import authRouter from "./userRouter.js";
import { Router } from "express";

const mainRouter=Router();
mainRouter.use("/product",productRouter)
mainRouter.use("/contact",contactRouter)
mainRouter.use("/auth",authRouter)

export default mainRouter;