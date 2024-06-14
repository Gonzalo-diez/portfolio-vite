import express from "express";
import passport from "../config/passport-jwt-config.js";
import { configureWorkMulter } from "../util.js";
import workController from "../controllers/work.controller.js";

const workImage = configureWorkMulter();
const workRouter = express.Router();
const protectWithJWT = passport.authenticate("jwt", {session: false});

workRouter.get("/", workController.getWorks);
workRouter.get("/:id", workController.getWorkById);
workRouter.post("/protected/addWork", protectWithJWT, workImage.single("image"), workController.createWork);
workRouter.put("/protected/updateWork/:id", protectWithJWT, workImage.single("image"), workController.updateWork);
workRouter.delete("/protected/deleteWork/:id", protectWithJWT, workController.deleteWork);

export default workRouter;