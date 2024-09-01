import express from "express";
import userController from "../controllers/user.controller.js"
import { authToken } from "../config/auth.js";

const userRouter = express.Router();

userRouter.post("/login", userController.login);
userRouter.get("/protected/:id", authToken, userController.getUserId);
userRouter.post("/protected/logout", authToken, userController.logout);

export default userRouter;