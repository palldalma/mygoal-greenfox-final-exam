import { Request, Response, NextFunction } from "express";
import HttpException from "../exceptions/http-exception";
import { customQuizService } from "../services/custom-quiz-service";

export const customQuizController = {
  async post(req: Request, res: Response, next: NextFunction): Promise<void> {
    const level: string = req.headers.level as unknown as string;
    const course: string = req.headers.course as unknown as string;
    const question: string = req.body.question as unknown as string;
    const answers = req.body.answers;

    try {
      await customQuizService.addNewQuestionToDb(
        level,
        course,
        question,
        answers
      );
      res.status(200).send();
    } catch (error: any) {
      next(new HttpException(500, error.message));
    }
  },
};
