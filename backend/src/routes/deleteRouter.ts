import express from "express";
import cors from "cors";

import authenticateToken from "../middleware/authenticate-token";
import { deleteController } from "../controllers/delete-controller";

const deleteRouter = express.Router();
deleteRouter.use(cors());
deleteRouter.use(express.json());

deleteRouter.use(authenticateToken);
deleteRouter.delete("/", deleteController.delete);

export default deleteRouter;
