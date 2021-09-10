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

const mapStateToProps = (state: any) => {
  const userid = state.user.id;
  const token = state.user.token;
  const gem = state.resources.gem;
  const lives = state.resources.lives;
  return {
    userid,
    token,
    gem,
    lives,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Heartshop);
