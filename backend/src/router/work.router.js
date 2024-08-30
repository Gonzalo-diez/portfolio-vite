import express from "express";
import { authToken } from "../config/auth.js";
import { configureWorkMulter } from "../util.js";
import workController from "../controllers/work.controller.js";

const workImage = configureWorkMulter();
const workRouter = express.Router();

workRouter.get("/", workController.getWorks);
workRouter.get("/:id", workController.getWorkById);
workRouter.post("/protected/addWork", authToken, workImage.single("image"), workController.createWork);
workRouter.put("/protected/updateWork/:id", authToken, workImage.single("image"), workController.updateWork);
workRouter.delete("/protected/deleteWork/:id", authToken, workController.deleteWork);

export default workRouter;