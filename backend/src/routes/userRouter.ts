import express from "express";
import cors from "cors";
import { Request, Response, NextFunction } from "express";
import { DbResult } from "../models/data/db-results";
import { registrationController } from "../controllers/registration-controller";
import { loginController } from "../controllers/login-controller";
import { resourceController } from "../controllers/resource-controller";

const userRouter = express.Router();
userRouter.use(cors());
userRouter.use(express.json());

userRouter.post("/registration", registrationController.postUserDataToDB);
userRouter.post("/login", loginController.checkUserData);

userRouter.get("/resources", resourceController.get);
userRouter.put("/resources/update", resourceController.put);

// userRouter.get("/starter", resourceController.get);

export default userRouter;
