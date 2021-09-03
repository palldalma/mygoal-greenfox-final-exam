import express from "express";
import cors from "cors";

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

export default userRouter;
