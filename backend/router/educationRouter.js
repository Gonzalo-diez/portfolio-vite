import express from "express";
import passport from "../config/passport-jwt-config.js";
import { configureEducationMulter } from "../util.js";
import educationController from "../dao/controllers/educationController.js";

const educationImage = configureEducationMulter()
const educationRouter = express.Router();
const protectWithJWT = passport.authenticate("jwt", {session: false});

educationRouter.get("/", educationController.getEducations);
educationRouter.get("/:id", educationController.getEducationById);
educationRouter.post("/protected/addEducation", protectWithJWT, educationImage.single("image"), educationController.createEducation);
educationRouter.put("/protected/updateEducation/:id", protectWithJWT, educationImage.single("image"), educationController.updateEducation);
educationRouter.delete("/protected/deleteEducation/:id", protectWithJWT,educationController.deleteEducation);

export default educationRouter;