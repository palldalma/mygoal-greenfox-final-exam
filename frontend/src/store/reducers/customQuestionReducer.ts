import { UPDATE_LEVEL_OF_CUSTOM_QUESTION } from "../actions/customQuestionAction";

interface CustomQuestionState {
  levelOfCustomQuestion: string;
}

const initialState = "";

export const customQuestionReducer = (state = initialState, action: any) => {
  if (action.type === UPDATE_LEVEL_OF_CUSTOM_QUESTION) {
    return action.payload;
  }

  return state;
};
