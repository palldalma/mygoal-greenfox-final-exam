import { QuestionWithRelevantAnswers } from "../../interfaces/courseinfo";

export const LOAD_COURSE = "LOAD_COURSE";

export const loadCourseToStore = (course: QuestionWithRelevantAnswers[]) => ({
  type: LOAD_COURSE,
  payload: course,
});
