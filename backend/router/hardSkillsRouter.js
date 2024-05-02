import express from "express";
import passport from "../config/passport-jwt-config.js";
import hardSkillsController from "../dao/controllers/hardSkillsController.js";

const hardSkillsRouter = express.Router();
const protectWithJWT = passport.authenticate("jwt", {session: false});

hardSkillsRouter.get("/", hardSkillsController.getHardSkills);
hardSkillsRouter.get("/:id", hardSkillsController.getHardSkillById);
hardSkillsRouter.post("/protected/addHardSkill", protectWithJWT, hardSkillsController.createHardSkill);
hardSkillsRouter.put("/protected/updateHardSkill/:id", protectWithJWT, hardSkillsController.updateHardSkill);
hardSkillsRouter.delete("/protected/deleteHardSkill/:id", protectWithJWT, hardSkillsController.deleteHardSkill);

export default hardSkillsRouter;