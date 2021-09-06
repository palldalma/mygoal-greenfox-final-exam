import config from "../config";

import {
  ResourceInfo,
  updateResourceRequest,
} from "../interfaces/resourceinfo";

const getResources = async (
  userid: string | undefined
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
      },
    });

    const result: ResourceInfo = await response.json();

    return result;
    // if (response.status === 200) {
    //   return { gem: result, live: result.token, id: result.id };
    // } else {
    //   return { error: result.message };
    // }
  } catch (err) {
    return { error: err.message };
  }
};

const updateResources = async (
  requestedChanges: updateResourceRequest
) /* : Promise<ResourceInfo> */ => {
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
        },
        body: JSON.stringify({
          gem: requestedChanges.gem,
          lives: requestedChanges.lives,
        }),
      });

      const result: ResourceInfo = await response.json();

      return result;
      // if (response.status === 200) {
      //   return { gem: result, live: result.token, id: result.id };
      // } else {
      //   return { error: result.message };
      // }
    }
  } catch (err) {
    return { error: err.message };
  }
};

export { getResources, updateResources };
