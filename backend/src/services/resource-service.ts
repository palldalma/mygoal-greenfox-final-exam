import { db } from "../data/connection";
import { DbResult } from "../models/data/db-results";
import {
  ResourceRequest,
  ResourceResponse,
  updateResourceRequest,
  updateResourceResponse,
} from "../models/dto/resource";
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

  const resources = data.results[0] as GemAndLives;

  const response: ResourceResponse = {
    resources: resources,
  };

  return new Promise((resolve) => resolve(response));
};

const updateResources = async (request: updateResourceRequest) => {
  const { userid } = request;
  const { gem, lives } = request.body;

  const data: DbResult = await db
    .query(`UPDATE resource SET gem=(?), lives=(?) WHERE userid=(?);`, [
      gem,
      lives,
      userid,
    ])

    .catch((error) => {
      throw new Error(`database error: ${error.message}`);
    });
};

export const resourcesService = {
  getResources,
  updateResources,
};
