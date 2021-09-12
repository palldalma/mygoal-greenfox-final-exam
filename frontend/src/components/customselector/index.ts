import { connect } from "react-redux";
import { setBackBtnVisibility } from "../../store/actions/backBtnAction";
import CustomSelector from "./CustomSelector";

const mapStateToProps = (state: any) => {
  const loggedIn = state.loggedIn;
  const level = state.course.level;
  const { backBtn } = state;
  return {
    loggedIn,
    level,
    backBtn,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setBackBtnVisibility: (boolean: boolean) =>
      dispatch(setBackBtnVisibility(boolean)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomSelector);
