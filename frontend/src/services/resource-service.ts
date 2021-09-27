import config from "../config";

import {
  ResourceInfo,
  updateResourceRequest,
} from "../interfaces/resourceinfo";

const getResources = async (
  userid: string | undefined,
  token: string | undefined
): Promise<ResourceInfo> => {
  if (!userid) {
    return { error: "Userid is missing." };
  }

  try {
    const response = await fetch(`${config.url}/users/resources`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userid: userid,
        authorization: `Bearer ${token}`,
      },
    });

    const result: ResourceInfo = await response.json();

    if (response.status === 200) {
      return result;
    } else {
      return { error: "Couldn't fetch resources" };
    }
  } catch (err: any) {
    return { error: err.message };
  }
};

const updateResources = async (
  requestedChanges: updateResourceRequest,
  token: string | undefined
) => {
  if (!requestedChanges.userid) {
    return { error: "Userid is missing." };
  }

  try {
    if (
      requestedChanges.userid !== undefined &&
      requestedChanges.gem !== undefined &&
      requestedChanges.lives !== undefined
    ) {
      const response = await fetch(`${config.url}/users/resources/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          userid: requestedChanges.userid,
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          gem: requestedChanges.gem,
          lives: requestedChanges.lives,
        }),
      });

      const result: ResourceInfo = await response.json();

      if (response.status === 200) {
        return result;
      } else {
        return { error: "couldn't update resources" };
      }
    }
  } catch (err: any) {
    return { error: err.message };
  }
};

export { getResources, updateResources };
