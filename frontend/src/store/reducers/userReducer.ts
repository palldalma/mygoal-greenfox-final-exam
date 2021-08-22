import { SAVE_USER_INFO } from "../actions/userAction";

interface UserState {
  token: string;
  username: string;
  id: string;
}

const initialState: UserState = {
  token: "",
  username: "",
  id: "",
};

export const userReducer = (state = initialState, action: any) => {
  if (action.type === SAVE_USER_INFO) {
    return action.payload;
  }

  return state;
};
