import config from "../config";
import { Courses } from "../interfaces/courseinfo";

const listCourses = async (userid: string | undefined): Promise<Courses> => {
  if (!userid) {
    return { error: "Userid is missing." };
  }

  try {
    const response = await fetch(`${config.url}/starter/translation`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userid: userid,
      },
    });

    const result: Courses = await response.json();

    if (response.status === 200) {
      return result;
    } else {
      return { error: "Loading courses failed." };
    }
  } catch (err) {
    return { error: err.message };
  }
};

export { listCourses };
