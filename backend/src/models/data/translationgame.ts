import { Course } from "../dto/translationgame";

export interface ListMyTranslationCoursesRequest {
  userid: number | undefined;
  level: string | undefined;
}

export interface ListMyTranslationCoursesResponse {
  courses: Course[];
}

export interface ListQuestionsRequest {
  courseid: number | undefined;
}
