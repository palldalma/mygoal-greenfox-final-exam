import { connect } from "react-redux";
import Home from "./HomePage";

export interface State {
  loggedIn: boolean;
}

const mapStateToProps = (state: State) => {
  const { loggedIn } = state;
  return {
    loggedIn,
  };
};

export default connect(mapStateToProps)(Home);
