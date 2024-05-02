import express from "express";
import passport from "../config/passport-jwt-config.js";
import softSkillsController from "../dao/controllers/softSkillsController.js";

const softSkillsRouter = express.Router();
const protectWithJWT = passport.authenticate("jwt", {session: false});

softSkillsRouter.get("/", softSkillsController.getSoftSkills);
softSkillsRouter.get("/:id", softSkillsController.getSoftSkillById);
softSkillsRouter.post("/protected/addSoftSkill", protectWithJWT, softSkillsController.createSoftSkill);
softSkillsRouter.put("/protected/updateSoftSkill/:id", protectWithJWT, softSkillsController.updateSoftSkill);
softSkillsRouter.delete("/protected/deleteSoftSkill/:id", protectWithJWT, softSkillsController.deleteSoftSkill);

export default softSkillsRouter;