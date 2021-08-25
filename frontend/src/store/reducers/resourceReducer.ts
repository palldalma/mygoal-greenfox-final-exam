import { SAVE_RESOURCES } from "../actions/resourceAction";

interface ResourceState {
  gem: number;
  lives: number;
}

const initialState: ResourceState = {
  gem: 0,
  lives: 0,
};

export const resourceReducer = (state = initialState, action: any) => {
  if (action.type === SAVE_RESOURCES) {
    return action.payload;
  }
  return state;
};
