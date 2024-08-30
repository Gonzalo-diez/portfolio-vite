import express from "express";
import userController from "../controllers/user.controller.js"
import { authToken } from "../config/auth.js";

const userRouter = express.Router();

userRouter.get("/github", userController.getGitHub);
userRouter.get("/githubcallback", userController.gitHubCallback, userController.handleGitHubCallback);
userRouter.get("/protected/:id", authToken, userController.getUserId);
userRouter.post("/protected/logout", authToken, userController.logout);

export default userRouter;