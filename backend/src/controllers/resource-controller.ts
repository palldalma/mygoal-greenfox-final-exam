import { Request, Response, NextFunction } from "express";
import { resourcesService } from "../services/resource-service";
import HttpException from "../exceptions/http-exception";
import { ErrorHandling } from "../services/error-service";
import { updateResourceRequest } from "../models/dto/resource";

export const resourceController = {
  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    const userid: number = parseInt(req.headers.userid as unknown as string);
    await resourcesService
      .getResources({ userid })
      .then((data) => {
        // if ((data as ErrorHandling).status === "error") {
        //   res.status(400).json(data);
        // } else {
        // console.log(data);
        return res.status(200).json(data);
        // }
      })
      .catch((error) => {
        next(new HttpException(500, error));
      });
    // res.json(resource);
  },

  async put(req: Request, res: Response, next: NextFunction): Promise<void> {
    const userid: number = parseInt(req.headers.userid as unknown as string);
    const gem: number = parseInt(req.body.gem as unknown as string);
    const lives: number = parseInt(req.body.lives as unknown as string);

    const data = await resourcesService
      .updateResources({
        userid: userid,
        body: { gem: gem, lives: lives },
      } as updateResourceRequest)
      .catch((error) => {
        next(new HttpException(500, error.message));
      });

    // if ((data as ErrorHandling).status === `error`) {
    //   res.status(404).json(data);
    // } else {
    res.status(200).json(data);
    // },
  },
};
