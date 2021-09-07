import express from "express";
import cors from "cors";
import { translationController } from "../controllers/translation-controller";
import authenticateToken from "../middleware/authenticate-token";

const starterRouter = express.Router();
starterRouter.use(cors());
starterRouter.use(express.json());

starterRouter.get(
  "/translation",
  authenticateToken,
  translationController.getCourses
);
starterRouter.get(
  "/translation/:id",
  authenticateToken,
  translationController.getQuestionList
);

export default starterRouter;
