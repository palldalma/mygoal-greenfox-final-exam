import { Request, Response, NextFunction } from "express";
import HttpException from "../exceptions/http-exception";
import { translationService } from "../services/translation-service";

export const translationController = {
  async getCourses(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const userid: number = parseInt(req.headers.userid as unknown as string);
    const level: string = req.headers.level as unknown as string;
    translationService
      .listCourses({ userid, level })
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((error) => {
        next(new HttpException(500, error));
      });
  },

  async getQuestionList(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const courseid = parseInt(req.params.id);

    translationService
      .pullQuestions({ courseid })
      .catch((error) => {
        next(new HttpException(500, error));
      })
      .then((data) => {
        return res.status(200).json(data);
      });
  },
};
