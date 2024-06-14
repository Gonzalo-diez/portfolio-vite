import express from "express";
import passport from "../config/passport-jwt-config.js";
import userController from "../controllers/user.controller.js"

const userRouter = express.Router();
const protectWithJWT = passport.authenticate("jwt", {session: false});

userRouter.post("/login", userController.login);
userRouter.get("/protected/:id", protectWithJWT, userController.getUserId);
userRouter.post("/protected/logout", protectWithJWT, userController.logout);

export default userRouter;