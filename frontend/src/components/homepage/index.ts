import { connect } from "react-redux";
import Home from "./HomePage";

import { setBackBtnVisibility } from "../../store/actions/backBtnAction";

const mapStateToProps = (state: any) => {
  const { loggedIn } = state;
  const { backBtn } = state;
  return {
    loggedIn,
    backBtn,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setBackBtnVisibility: (boolean: boolean) =>
      dispatch(setBackBtnVisibility(boolean)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
