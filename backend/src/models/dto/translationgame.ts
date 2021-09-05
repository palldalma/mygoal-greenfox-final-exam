export interface TranslationGameRequest {
  level: string;
  courseid: number;
}

export interface Course {
  id: number;
  name: string;
  level: string;
}

export interface Level {
  level: string;
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
  question: string;
  answer: string;
  courseid: number;
  questionid: number;
  iscorrect: number;
}

export interface ReadyQuizObject {
  question: string;
  answers: [
    { answer: string; iscorrect: number },
    { answer: string; iscorrect: number },
    { answer: string; iscorrect: number },
    { answer: string; iscorrect: number }
  ];
}
