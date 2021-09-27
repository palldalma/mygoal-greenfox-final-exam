import { db } from "../data/connection";
import { DbResult } from "../models/data/db-results";

interface QuestionID {
  id: number;
}

const deleteQuestionFromDb = async (question: string) => {
  try {
    const data: DbResult = await db.query(
      `SELECT id FROM question_translation WHERE question=?;`,
      [question]
    );
    const questionIDFromDb = data.results[0] as QuestionID;

    await db.query(`DELETE FROM answer_translation WHERE questionid=?;`, [
      questionIDFromDb.id,
    ]);

    await db.query(`DELETE FROM question_translation WHERE id=?;`, [
      questionIDFromDb.id,
    ]);
  } catch (error: any) {
    throw new Error(`database error: ${error.message}`);
  }
};

export const deleteService = {
  deleteQuestionFromDb,
};
