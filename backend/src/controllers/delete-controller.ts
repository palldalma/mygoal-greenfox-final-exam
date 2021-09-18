import { Request, Response, NextFunction } from "express";

import HttpException from "../exceptions/http-exception";
import { deleteService } from "../services/delete-service";

export const deleteController = {
  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    const level: string = req.body.level; /* as unknown as string;*/
    const question: string = req.body.question; /*as unknown as string;*/

    const data = await deleteService
      .deleteQuestionFromDb(level, question)
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
