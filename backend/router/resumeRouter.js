import express from "express";
import passport from "../config/passport-jwt-config.js";
import { configureResumeMulter } from "../util.js";
import resumeController from "../dao/controllers/resumeController.js";

const resumeFiles = configureResumeMulter().fields([
    { name: 'pdf_resume', maxCount: 1 },
    { name: 'pdf_sub_resume', maxCount: 1 },
    { name: 'resume', maxCount: 1 },
    { name: 'sub_resume', maxCount: 1 }
]);
const resumeRouter = express.Router();
const protectWithJWT = passport.authenticate("jwt", {session: false});

resumeRouter.get("/", resumeController.getResume);
resumeRouter.get("/:id", resumeController.getResumeById);
resumeRouter.put("/protected/updateResume/:id", protectWithJWT, resumeFiles, resumeController.updateResume);

export default resumeRouter;