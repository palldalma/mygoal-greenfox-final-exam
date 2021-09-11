import { SET_BACKBTN_VISIBILITY } from "../actions/backBtnAction";

const initialState = false;

export const backBtnReducer = (state = initialState, action: any) => {
  if (action.type === SET_BACKBTN_VISIBILITY) {
    return action.payload;
  }

  return state;
};
