import { AnyAction } from "redux";
import { SAVE_RESOURCE } from "../actions/resourceAction";

interface ResourceState {
  gem: number;
  live: number;
}

const initialState: ResourceState = {
  gem: 0,
  live: 0,
};

export const resourceReducer = (state = initialState, action: any) => {
  if (action.type === SAVE_RESOURCE) {
    return action.payload;
  }

  return state;
};
