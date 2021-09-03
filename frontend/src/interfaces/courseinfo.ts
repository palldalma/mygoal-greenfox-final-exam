export interface Course {
  name: string;
  id: number;
  level: string;
}
export interface Courses {
  courses?: Course[];
  error?: string;
}
