import { Request, Response, NextFunction } from "express";

import HttpException from "../exceptions/http-exception";

import { translationService } from "../services/translation-service";

export const translationController = {
  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    const userid: number = parseInt(req.headers.userid as unknown as string);
    await translationService
      .listCourses({ userid })
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((error) => {
        next(new HttpException(500, error));
      });
  },
};
