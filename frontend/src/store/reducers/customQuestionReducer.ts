import {
  UPDATE_LEVEL_OF_CUSTOM_QUESTION,
  UPDATE_COURSE_OF_CUSTOM_QUESTION,
} from "../actions/customQuestionAction";

const initialState = "";

export const customLevelReducer = (state = initialState, action: any) => {
  if (action.type === UPDATE_LEVEL_OF_CUSTOM_QUESTION) {
    return action.payload;
  }

  return state;
};

export const customCourseReducer = (state = initialState, action: any) => {
  if (action.type === UPDATE_COURSE_OF_CUSTOM_QUESTION) {
    return action.payload;
  }

  return state;
};
