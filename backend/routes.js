import express from "express";
import userRouter from "./router/userRouter.js";
import hardSkillsRouter from "./router/hardSkillsRouter.js";
import softSkillsRouter from "./router/softSkillsRouter.js";
import workRouter from "./router/workRouter.js";
import educationRouter from "./router/educationRouter.js";
import resumeRouter from "./router/resumeRouter.js";

const router = express.Router();

router.use("/user", userRouter);
router.use("/hardSkills", hardSkillsRouter);
router.use("/softSkills", softSkillsRouter);
router.use("/works", workRouter);
router.use("/educations", educationRouter);
router.use("/resume", resumeRouter);

export default router;