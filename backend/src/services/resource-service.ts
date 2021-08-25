import { db } from "../data/connection";
import { DbResult } from "../models/data/db-results";
import { ResourceRequest, ResourceResponse } from "../models/dto/resource";
import { GemAndLives } from "../models/data/resource";

const getResources = async (
  request: ResourceRequest
): Promise<ResourceResponse> => {
  const { userid } = request;

  const data: DbResult = await db
    .query(
      `SELECT gem,lives FROM resource r INNER JOIN user u ON r.userid = u.id WHERE u.id = ?`,
      [userid]
    )
    .catch((error) => {
      throw new Error(`database error: ${error.message}`);
    });

  const gemAndLive = data.results[0] as GemAndLives;

  const response: ResourceResponse = {
    resources: gemAndLive,
  };

  return new Promise((resolve) => resolve(response));
};

export const resourcesService = {
  getResources,
};
