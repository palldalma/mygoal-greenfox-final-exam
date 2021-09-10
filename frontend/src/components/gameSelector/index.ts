import { connect } from "react-redux";

import GameSelector from "./GameSelector";

const mapStateToProps = (state: any) => {
  const loggedIn = state.loggedIn;
  const level = state.course.level;
  return {
    loggedIn,
    level,
  };
};

export default connect(mapStateToProps)(GameSelector);
