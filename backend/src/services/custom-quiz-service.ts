import { db } from "../data/connection";
import { DbResult } from "../models/data/db-results";

interface Answer {
  answer: string;
  iscorrect: number;
}

interface CourseID {
  id: number;
}

interface QuestionID {
  id: number;
}

const addNewQuestionToDb = async (
  level: string,
  course: string,
  question: string,
  answers: Answer[]
) => {
  const data: DbResult = await db

    .query(`SELECT id FROM course_translation WHERE name=?;`, [course])

    .catch((error) => {
      throw new Error(`database error: ${error.message}`);
    });

  const courseid = data.results[0] as CourseID;

  const addNewQuestionToDb: DbResult = await db.query(
    `INSERT INTO question_translation (courseid,question) VALUES (?,?);`,
    [courseid.id, question]
  );

  const newQuestionFromDb: DbResult = await db.query(
    `SELECT id FROM question_translation WHERE question=?;`,
    [question]
  );

  const questionid = newQuestionFromDb.results[0] as QuestionID;

  for (const answer of answers) {
    const addNewAnswerToDb: DbResult = await db.query(
      `INSERT INTO answer_translation (questionid, iscorrect,answer) VALUES (?,?,?);`,
      [questionid.id, answer.iscorrect, answer.answer]
    );
  }
};

export const customQuizService = {
  addNewQuestionToDb,
};
