import express from "express";
import {register,login} from "../controllers/authenticationController.js";
import { getUserById,getAllUsers } from "../controllers/userController.js";

const authRouter=express();


authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/getAllUsers",getAllUsers)

export default authRouter;