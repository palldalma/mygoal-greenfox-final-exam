import config from "../config";
import {
  Courses,
  QuestionWithRelevantAnswers,
  QuizLayout,
} from "../interfaces/courseinfo";

const listCourses = async (
  userid: string | undefined,
  token: string | undefined,
  level: string | undefined
): Promise<Courses> => {
  if (!userid || !level) {
    return { error: "Userid is missing." };
  }

  try {
    const response = await fetch(`${config.url}/${level}/translation`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userid: userid,
        level: level,
        authorization: `Bearer ${token}`,
      },
    });

    const result: Courses = await response.json();

    if (response.status === 200) {
      return result;
    } else {
      return { error: "Loading courses failed." };
    }
  } catch (err: any) {
    return { error: err.message };
  }
};

const pullQuestions = async (
  courseid: number,
  token: string | undefined
): Promise<QuestionWithRelevantAnswers[] | string> => {
  try {
    const response = await fetch(
      `${config.url}/starter/translation/${courseid}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );

    const result: QuestionWithRelevantAnswers[] = await response.json();

    if (response.status === 200) {
      return result;
    } else {
      return "Loading questions failed.";
    }
  } catch (err: any) {
    return err.message;
  }
};

export { listCourses, pullQuestions };
