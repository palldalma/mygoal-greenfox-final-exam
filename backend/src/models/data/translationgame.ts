import { Course } from "../dto/translationgame";

export interface ListMyTranslationCoursesRequest {
  userid: number | undefined;
}

export interface ListMyTranslationCoursesResponse {
  courses: Course[];
}
