import { Request, Response, NextFunction } from "express";
import { userService } from "../services/user-service";
import { ErrorHandling } from "../services/error-service";

export const registrationController = {
  async postUserDataToDB(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const data = await userService
      .register(req)
      .then((data) => {
        if ((data as ErrorHandling).message === "Username is already taken.") {
          res.status(409).json(data);
        } else if (
          (data as ErrorHandling).message ===
          "Password must be at least 8 characters."
        ) {
          res.status(406).json(data);
        } else if ((data as ErrorHandling).status === "error") {
          res.status(400).json(data);
        } else {
          res.status(201).json(data);
        }
      })
      .catch((err) => res.status(500).end("internal server error"));
  },
};
