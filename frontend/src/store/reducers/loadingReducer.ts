import { AnyAction } from "redux";
import { HIDE_LOADING, SHOW_LOADING } from "../actions/loadingAction";

const initialState: string[] = [];

export const loadingReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SHOW_LOADING:
      return [...state, action.payload];
    case HIDE_LOADING:
      const newState = state.filter((url: string) => {
        return url !== action.payload;
      });
      return newState;
    default:
      return state;
  }
};
