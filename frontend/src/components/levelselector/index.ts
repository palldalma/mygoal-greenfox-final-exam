import { connect } from "react-redux";

import LevelSelector from "./LevelSelector";

import { updateLevel } from "../../store/actions/courseAction";

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateLevel: (selectedLevel: string) =>
      dispatch(updateLevel(selectedLevel)),
  };
};

export default connect(null, mapDispatchToProps)(LevelSelector);
