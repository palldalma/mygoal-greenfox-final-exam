import express from "express";
import cors from "cors";

import { registrationController } from "../controllers/registration-controller";
import { loginController } from "../controllers/login-controller";
import { resourceController } from "../controllers/resource-controller";
import authenticateToken from "../middleware/authenticate-token";

const userRouter = express.Router();
userRouter.use(cors());
userRouter.use(express.json());

userRouter.post("/registration", registrationController.postUserDataToDB);
userRouter.post("/login", loginController.checkUserData);

userRouter.get("/resources", authenticateToken, resourceController.get);
userRouter.put("/resources/update", authenticateToken, resourceController.put);

export default userRouter;
