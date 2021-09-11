export interface Course {
  name: string;
  id: number;
  level: string;
}
export interface Courses {
  courses?: Course[];
  error?: string;
}

export interface QuestionWithRelevantAnswers {
  question: string;
  answers: Answer[];
}

export interface Answer {
  answer: string;
  iscorrect: number;
}

export interface QuizLayout {
  questionCollection?: QuestionWithRelevantAnswers[];
  error?: string;
}
