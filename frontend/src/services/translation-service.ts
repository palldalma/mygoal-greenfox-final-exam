import config from "../config";
import { Courses, QuizLayout } from "../interfaces/courseinfo";

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

const pullQuestions = async () /*: Promise<QuizLayout | string> */ => {
  try {
    const response = await fetch(`${config.url}/starter/translation/:id`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (response.status === 200) {
      return result;
    } else {
      return "Loading questions failed.";
    }
  } catch (err) {
    return err.message;
  }
};

export { listCourses, pullQuestions };
