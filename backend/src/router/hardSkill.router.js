import express from "express";
import { authToken } from "../config/auth.js";
import hardSkillsController from "../controllers/hardSkills.controller.js";

const hardSkillsRouter = express.Router();

hardSkillsRouter.get("/", hardSkillsController.getHardSkills);
hardSkillsRouter.get("/:id", hardSkillsController.getHardSkillById);
hardSkillsRouter.post("/protected/addHardSkill", authToken, hardSkillsController.createHardSkill);
hardSkillsRouter.put("/protected/updateHardSkill/:id", authToken, hardSkillsController.updateHardSkill);
hardSkillsRouter.delete("/protected/deleteHardSkill/:id", authToken, hardSkillsController.deleteHardSkill);

export default hardSkillsRouter;