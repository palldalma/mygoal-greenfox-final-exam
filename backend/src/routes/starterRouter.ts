import express from "express";
import cors from "cors";
import { translationController } from "../controllers/translation-controller";

const starterRouter = express.Router();
starterRouter.use(cors());
starterRouter.use(express.json());

starterRouter.get("/translation", translationController.getCourses);
starterRouter.get("/translation/:id", translationController.getQuestionList);

export default starterRouter;
