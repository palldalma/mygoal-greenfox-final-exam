export interface TranslationGameRequest {
  level: string;
  courseid: number;
}

export interface TranslationGameResponse {
  questions: Question[];
  answers: Answer[];
}

export interface Question {
  id: number;
  courseid: number;
  question: string;
}

export interface Answer {
  id: number;
  questionid: number;
  iscorrect: number;
  answer: string;
}
