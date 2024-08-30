import express from "express";
import { authToken } from "../config/auth.js";
import { configureEducationMulter } from "../util.js";
import educationController from "../controllers/education.controller.js";

const educationImage = configureEducationMulter();
const educationRouter = express.Router();

educationRouter.get("/", educationController.getEducations);
educationRouter.get("/:id", educationController.getEducationById);
educationRouter.post("/protected/addEducation", authToken, educationImage.single("image"), educationController.createEducation);
educationRouter.put("/protected/updateEducation/:id", authToken, educationImage.single("image"), educationController.updateEducation);
educationRouter.delete("/protected/deleteEducation/:id", authToken, educationController.deleteEducation);

export default educationRouter;