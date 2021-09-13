import { Answer } from "../interfaces/courseinfo";
import config from "../config";

export const submitNewQuestion = async (
  level: string,
  course: string,
  newQuestion: string,
  answers: Answer[],
  token: string
) => {
  //answers should not be empty strings
  const isAnswerOk = (answer: Answer) => {
    if (
      answer.answer !== null ||
      answer.answer !== "" ||
      answer.answer !== undefined
    ) {
      return true;
    } else {
      console.log("isAnswerOk");
    }
  };

  const checkGoodAnswer = (answers: Answer[]) => {
    //there should be at least one good answer
    if (answers.some((answer: Answer) => answer.iscorrect === 1)) {
      return true;
    } else {
      console.log("checkGoodAnswer", answers);
    }
  };

  const checkWrongAnswers = (answers: Answer[]) => {
    //there should be only one good answer
    const result = answers.filter((answer) => answer.iscorrect === 0);
    if (result.length === 3) {
      return true;
    } else {
      console.log("checkWrongAnswers");
    }
  };

  // validation
  if (
    !newQuestion ||
    !answers.every(isAnswerOk) ||
    !token ||
    !checkGoodAnswer(answers) ||
    !checkWrongAnswers ||
    !level ||
    !course
  ) {
    console.log("validation error");
    return { error: "the new quiz question was submitted with missing values" };
  }

  console.log("SUCCESS" + level, course, newQuestion, answers);

  // try {
  //   const response = await fetch(`${config.url}/create/translation`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //       level: level,
  //       course: course,
  //       authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify({
  //       question: newQuestion,
  //       answers: answers,
  //     }),
  //   });

  //   const result = await response.json();

  //   if (response.status === 200) {
  //     return result;
  //   } else {
  //     return { error: "quiz question could not be added to the database" };
  //   }
  // } catch (err: any) {
  //   return { error: err.message };
  // }
};
