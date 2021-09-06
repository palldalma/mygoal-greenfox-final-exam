import { UPDATE_LEVEL, UPDATE_COURSEID } from "../actions/courseAction";

interface CourseState {
  level: string;
  courseid: number;
}

const initialState: CourseState = {
  level: "string",
  courseid: 0,
};

export const courseReducer = (state = initialState, action: any) => {
  if (action.type === UPDATE_LEVEL) {
    return { ...state, level: action.payload.level };
  }
  if (action.type === UPDATE_COURSEID) {
    return { ...state, courseid: action.payload.courseid };
  }

  return state;
};
