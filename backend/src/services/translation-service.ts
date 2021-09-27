import { db } from "../data/connection";
import { DbResult } from "../models/data/db-results";
import {
  ListMyTranslationCoursesRequest,
  ListMyTranslationCoursesResponse,
  ListQuestionsRequest,
} from "../models/data/translationgame";
import {
  Answer,
  Course,
  Level,
  ReadyQuizObject,
} from "../models/dto/translationgame";

const listCourses = async (
  request: ListMyTranslationCoursesRequest
): Promise<ListMyTranslationCoursesResponse> => {
  const { userid, level } = request;

  try {
    const data: DbResult = await db.query(
      `SELECT level FROM user u WHERE u.id = ?`,
      [userid]
    );
    const courseData: DbResult = await db.query(
      `SELECT * FROM course_translation c WHERE c.level = ?`,
      [level]
    );
    return { courses: courseData.results as Course[] };
  } catch (error: any) {
    throw new Error(`database error: ${error.message}`);
  }
};

const pullQuestions = async (
  request: ListQuestionsRequest
): Promise<ReadyQuizObject[] | string> => {
  const { courseid } = request;

  const data: DbResult = await db
    .query(
      `SELECT question, answer, courseid, questionid, iscorrect FROM question_translation q LEFT JOIN answer_translation a ON q.id=a.questionid WHERE courseid = ?`,
      [courseid]
    )
    .catch((error) => {
      throw new Error(`database error: ${error.message}`);
    });

  const course = data.results as Answer[];

  let questionids: number[] = [];
  if (course.length !== 0) {
    course.map((question) => {
      if (!questionids.includes(question.questionid)) {
        questionids.push(question.questionid);
      }
    });
  } else {
    return "This course is empty.";
  }

  const createQuizReturnValue = (course: Answer[]): ReadyQuizObject[] => {
    let questionCollection: any = [];

    questionids.forEach((questionid) => {
      let currentQuestion = "";
      let currentAnswers = [];
      for (let i = 0; i < course.length; i++) {
        if (currentQuestion === "" && questionid === course[i].questionid) {
          currentQuestion = course[i].question;
        }

        if (course[i].questionid === questionid)
          currentAnswers.push({
            answer: course[i].answer,
            iscorrect: course[i].iscorrect,
          });
      }
      let readyQuizObject = {
        question: currentQuestion,
        answers: currentAnswers,
      };

      questionCollection.push(readyQuizObject);
    });

    return questionCollection as ReadyQuizObject[];
  };

  return createQuizReturnValue(course);
};

export const translationService = {
  listCourses,
  pullQuestions,
};
