import { SAVE_USER_INFO } from "../actions/userAction";

interface UserState {
  token: string;
  username: string;
}

const initialState: UserState = {
  token: "",
  username: "",
};

export const userReducer = (state = initialState, action: any) => {
  if (action.type === SAVE_USER_INFO) {
    return action.payload;
  }

  return state;
};
