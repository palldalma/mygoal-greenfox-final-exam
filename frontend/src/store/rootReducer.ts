import { AnyAction, combineReducers } from "redux";
import { RootStateOrAny } from "react-redux";
import { userReducer } from "./reducers/userReducer";
import { resourceReducer } from "./reducers/resourceReducer";

const appReducer = combineReducers({
  user: userReducer,
  resources: resourceReducer,
});

const rootReducer = (state: RootStateOrAny | undefined, action: AnyAction) => {
  if (action.type === "LOG_USER_OUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export { rootReducer };
