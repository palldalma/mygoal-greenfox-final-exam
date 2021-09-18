import { db } from "../data/connection";
import { DbResult } from "../models/data/db-results";

interface QuestionID {
  id: number;
}

const deleteQuestionFromDb = async (
  level: string,

  question: string
) => {
  console.log(question);
  const data: DbResult = await db

    .query(`SELECT id FROM question_translation WHERE question=?;`, [question])

    .catch((error) => {
      throw new Error(`database error: ${error.message}`);
    });

  const questionIDFromDb = data.results[0] as QuestionID;

  const asnwersFromDb: DbResult = await db

    .query(`DELETE FROM answer_translation WHERE questionid=?;`, [
      questionIDFromDb.id,
    ])

    .catch((error) => {
      throw new Error(`database error: ${error.message}`);
    });

  const deleteQuestionFromQuestionTable: DbResult = await db

    .query(`DELETE FROM question_translation WHERE id=?;`, [
      questionIDFromDb.id,
    ])

    .catch((error) => {
      throw new Error(`database error: ${error.message}`);
    });
};

export const deleteService = {
  deleteQuestionFromDb,
};
