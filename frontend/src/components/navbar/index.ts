import { connect } from "react-redux";

import Navbar from "./Navbar";

import { deleteUserInfo } from "../../store/actions/userAction";
import { setLoggedIn } from "../../store/actions/loginAction";

export interface State {
  loggedIn: boolean;
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    deleteUserInfo: () => dispatch(deleteUserInfo()),
    setLoggedIn: (boolean: boolean) => setLoggedIn(boolean),
  };
};

const mapStateToProps = (state: State) => {
  const { loggedIn } = state;
  return {
    loggedIn,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
