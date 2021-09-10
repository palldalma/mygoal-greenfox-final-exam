import { SET_LOGGEDIN } from "../actions/loginAction";

const initialState: boolean = false;

export const loginReducer = (state = initialState, action: any) => {
  if (action.type === SET_LOGGEDIN) {
    return action.payload;
  }

  return state;
};
