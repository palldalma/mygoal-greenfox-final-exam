import { QuestionWithRelevantAnswers } from "../../interfaces/courseinfo";
import { LOAD_COURSE } from "../actions/quizAction";

interface QuizState {
  challenges: QuestionWithRelevantAnswers[];
}

const initialState: QuizState = {
  challenges: [],
};

export const quizReducer = (state = initialState, action: any) => {
  if (action.type === LOAD_COURSE) {
    return { ...state, challenges: action.payload };
  }

  return state;
};
