import express from "express";
import cors from "cors";
import { Request, Response, NextFunction } from "express";
import { DbResult } from "../models/data/db-results";
import { registrationController } from "../controllers/registration-controller";
import { loginController } from "../controllers/login-controller";

const userRouter = express.Router();
userRouter.use(cors());
userRouter.use(express.json());

userRouter.post("/registration", registrationController.postUserDataToDB);
userRouter.post("/login", loginController.checkUserData);

export default userRouter;
