import { connect } from "react-redux";

import Heartshop from "./Heartshop";

import { updateResourceState } from "../../store/actions/resourceAction";

import { GemAndLives } from "../../interfaces/resourceinfo";

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateResourceState: (gemAndLives: GemAndLives) =>
      dispatch(updateResourceState(gemAndLives)),
  };
};

export default connect(null, mapDispatchToProps)(Heartshop);
