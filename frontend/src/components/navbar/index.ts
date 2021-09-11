import { connect } from "react-redux";
import Navbar from "./Navbar";
import { deleteUserInfo } from "../../store/actions/userAction";
import { setLoggedIn } from "../../store/actions/loginAction";

const mapDispatchToProps = (dispatch: Function) => {
  return {
    deleteUserInfo: () => dispatch(deleteUserInfo()),
    setLoggedIn: (boolean: boolean) => setLoggedIn(boolean),
  };
};

const mapStateToProps = (state: any) => {
  const { loggedIn } = state;
  const { backBtn } = state;
  return {
    loggedIn,
    backBtn,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
