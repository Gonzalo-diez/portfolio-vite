import express from "express";
import userRouter from "./router/user.router.js";
import hardSkillsRouter from "./router/hardSkill.router.js";
import softSkillsRouter from "./router/softSkills.router.js";
import workRouter from "./router/work.router.js";
import educationRouter from "./router/education.router.js";
import resumeRouter from "./router/resume.router.js";

const router = express.Router();

router.use("/user", userRouter);
router.use("/hardSkills", hardSkillsRouter);
router.use("/softSkills", softSkillsRouter);
router.use("/works", workRouter);
router.use("/educations", educationRouter);
router.use("/resume", resumeRouter);

export default router;