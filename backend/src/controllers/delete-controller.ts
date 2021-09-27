import { Request, Response, NextFunction } from "express";
import HttpException from "../exceptions/http-exception";
import { deleteService } from "../services/delete-service";

export const deleteController = {
  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    const question: string = req.body.question;

    try {
      await deleteService.deleteQuestionFromDb(question);
      res.status(200).send();
    } catch (error: any) {
      next(new HttpException(500, error.message));
    }
  },
};
