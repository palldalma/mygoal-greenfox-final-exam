import { db } from "../data/connection";
import { DbResult } from "../models/data/db-results";
import {
  ListMyTranslationCoursesRequest,
  ListMyTranslationCoursesResponse,
} from "../models/data/translationgame";
import { Level } from "../models/dto/translationgame";

const listCourses = async (
  request: ListMyTranslationCoursesRequest

  //ha megadom a response type-ot, baromságot ír ki
) /*:Promise<ListMyTranslationCoursesResponse> */ => {
  const { userid } = request;

  const data: DbResult = await db
    .query(`SELECT level FROM user u WHERE u.id = ?`, [userid])
    .catch((error) => {
      throw new Error(`database error: ${error.message}`);
    });

  const level = data.results[0] as Level;

  const courseData: DbResult = await db
    .query(`SELECT * FROM course_translation c WHERE c.level = ?`, [
      level.level,
    ])
    .catch((error) => {
      throw new Error(`database error: ${error.message}`);
    });

  const courses =
    courseData.results as unknown as ListMyTranslationCoursesResponse;

  return new Promise((resolve) => resolve({ courses: courses }));
};

export const translationService = {
  listCourses,
};
