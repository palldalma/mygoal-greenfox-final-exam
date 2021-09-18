import { Request, Response, NextFunction } from "express";

import HttpException from "../exceptions/http-exception";
import { ErrorHandling } from "../services/error-service";

import { customQuizService } from "../services/custom-quiz-service";

export const customQuizController = {
  async post(req: Request, res: Response, next: NextFunction): Promise<void> {
    const level: string = req.headers.level as unknown as string;
    const course: string = req.headers.course as unknown as string;
    const question: string = req.body.question as unknown as string;
    const answers = req.body.answers;

    const data = await customQuizService
      .addNewQuestionToDb(level, course, question, answers)
      .catch((error: any) => {
        next(new HttpException(500, error.message));
      });

    // if ((data as ErrorHandling).status === `error`) {
    //   res.status(404).json(data);
    // } else {
    res.status(200).send();
    // },
  },
};
