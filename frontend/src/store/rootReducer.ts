import { AnyAction, combineReducers } from "redux";
import { RootStateOrAny } from "react-redux";
import { userReducer } from "./reducers/userReducer";

const appReducer = combineReducers({
  user: userReducer,
});

const rootReducer = (state: RootStateOrAny | undefined, action: AnyAction) => {
  if (action.type === "LOG_USER_OUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export { rootReducer };
