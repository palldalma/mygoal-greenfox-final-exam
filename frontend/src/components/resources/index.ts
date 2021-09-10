import { connect } from "react-redux";

import Resources from "./Resources";

import { updateResourceState } from "../../store/actions/resourceAction";

import { GemAndLives } from "../../interfaces/resourceinfo";

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateResourceState: (gemAndLives: GemAndLives) =>
      dispatch(updateResourceState(gemAndLives)),
  };
};

const mapStateToProps = (state: any) => {
  const resourcesFromStore = state.resources;
  const id = state.user.id;
  const token = state.user.token;

  return {
    resourcesFromStore,
    id,
    token,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Resources);
