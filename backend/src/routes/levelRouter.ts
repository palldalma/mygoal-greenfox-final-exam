import express from "express";
import cors from "cors";
import { translationController } from "../controllers/translation-controller";
import authenticateToken from "../middleware/authenticate-token";

const levelRouter = express.Router();
levelRouter.use(cors());
levelRouter.use(express.json());

levelRouter.use(authenticateToken);
levelRouter.get("/translation", translationController.getCourses);
levelRouter.get("/translation/:id", translationController.getQuestionList);

export default levelRouter;
