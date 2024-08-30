import express from "express";
import { authToken } from "../config/auth.js";
import softSkillsController from "../controllers/softSkills.controller.js";

const softSkillsRouter = express.Router();

softSkillsRouter.get("/", softSkillsController.getSoftSkills);
softSkillsRouter.get("/:id", softSkillsController.getSoftSkillById);
softSkillsRouter.post("/protected/addSoftSkill", authToken, softSkillsController.createSoftSkill);
softSkillsRouter.put("/protected/updateSoftSkill/:id", authToken, softSkillsController.updateSoftSkill);
softSkillsRouter.delete("/protected/deleteSoftSkill/:id", authToken, softSkillsController.deleteSoftSkill);

export default softSkillsRouter;