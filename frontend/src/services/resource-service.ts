import config from "../config";
import { LoginInfo } from "../interfaces/logininfo";
import { ResourceInfo } from "../interfaces/resourceinfo";

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

    const result = await response.json();

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

export { getResources };
