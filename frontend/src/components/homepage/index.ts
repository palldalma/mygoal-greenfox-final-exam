import { connect } from "react-redux";

import LevelSelector from "./LevelSelector";

import { updateLevel } from "../../store/actions/courseAction";

// import { SelectedLevel } from "../../interfaces/courseinfo";

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateLevel: (selectedLevel: /*SelectedLevel*/ string) =>
      dispatch(updateLevel(selectedLevel)),
  };
};

export default connect(null, mapDispatchToProps)(LevelSelector);
