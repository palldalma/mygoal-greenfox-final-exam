import express from "express";
import cors from "cors";

import authenticateToken from "../middleware/authenticate-token";
import { customQuizController } from "../controllers/custom-quiz-controller";

const createRouter = express.Router();
createRouter.use(cors());
createRouter.use(express.json());

createRouter.use(authenticateToken);
createRouter.post("/translation", customQuizController.post);

export default createRouter;
