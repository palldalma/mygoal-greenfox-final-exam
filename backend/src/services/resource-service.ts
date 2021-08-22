import { db } from "../data/connection";
import { DbResult } from "../models/data/db-results";
import { ResourceRequest, ResourceResponse } from "../models/dto/resource";
import { Resource } from "../models/data/resource";

const getResources = async (
  request: ResourceRequest
): Promise<ResourceResponse> => {
  const { userid } = request;

  const data: DbResult = await db
    .query(
      `SELECT gem,live FROM resource r INNER JOIN user u ON r.userid = u.id WHERE u.id = ?`,
      [userid]
    )
    .catch((error) => {
      throw new Error(`database error: ${error.message}`);
    });

  const resources = data.results[0] as Resource;

  const response: ResourceResponse = {
    resources: resources,
  };

  return new Promise((resolve) => resolve(response));
};

export const resourcesService = {
  getResources,
};
