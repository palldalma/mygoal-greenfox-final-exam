import { Request, Response, NextFunction } from "express";
import { resourcesService } from "../services/resource-service";
import HttpException from "../exceptions/http-exception";
import { updateResourceRequest } from "../models/dto/resource";

export const resourceController = {
  async get(req: Request, res: Response, next: NextFunction): Promise<void> {
    const userid: number = parseInt(req.headers.userid as unknown as string);
    resourcesService
      .getResources({ userid })
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((error) => {
        next(new HttpException(500, error));
      });
  },

  async put(req: Request, res: Response, next: NextFunction): Promise<void> {
    const userid: number = parseInt(req.headers.userid as unknown as string);
    const gem: number = parseInt(req.body.gem as unknown as string);
    const lives: number = parseInt(req.body.lives as unknown as string);

    try {
      const data = await resourcesService.updateResources({
        userid: userid,
        body: { gem: gem, lives: lives },
      } as updateResourceRequest);
      res.status(200).json(data);
    } catch (error: any) {
      next(new HttpException(500, error.message));
    }
  },
};
