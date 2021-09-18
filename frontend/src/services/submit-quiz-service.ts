import { Answer } from "../interfaces/courseinfo";
import config from "../config";

interface SubmissionResponse {
  error?: string;
  success?: string;
}

export const submitNewQuestion = async (
  level: string,
  course: string,
  newQuestion: string,
  answers: Answer[],
  token: string
) => {
  //answers should not be empty strings
  const isAnswerOk = (answer: Answer) => {
    if (answer.answer) {
      return true;
    } else return false;
  };

  const isThereACorrectAnswer = (answers: Answer[]) => {
    const result = answers.some((answer) => answer.iscorrect === 1);
    return result;
  };

  const isCorrectEvaluation = isThereACorrectAnswer(answers);

  // validation
  if (
    !newQuestion ||
    !answers.every(isAnswerOk) ||
    !token ||
    !level ||
    !course ||
    isCorrectEvaluation === false
  ) {
    console.log(newQuestion, answers, level, course);
    return { error: "the new quiz question was submitted with missing values" };
  }

  try {
    const response = await fetch(`${config.url}/create/translation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        level: level,
        course: course,
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        //level és course is a body-ban kéne utazzon
        question: newQuestion,
        answers: answers,
      }),
    });

    // const result = await response.json();

    if (response.status === 200 || response.status === 204) {
      return { success: "new question was submitted" } as SubmissionResponse;
    }
  } catch (err: any) {
    console.log(err, newQuestion, answers);
    return { error: err.message } as SubmissionResponse;
  }
};
