import express from "express";
import userRouter from "./router/user.router.js";
import workRouter from "./router/work.router.js";

const router = express.Router();

router.use("/user", userRouter);
router.use("/works", workRouter);

export default router;