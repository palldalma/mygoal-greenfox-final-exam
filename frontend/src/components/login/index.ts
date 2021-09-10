import { connect } from "react-redux";
import Login from "./Login";
import { LoginInfo } from "../../interfaces/logininfo";
import { saveUserInfo } from "../../store/actions/userAction";
import { setLoggedIn } from "../../store/actions/loginAction";

const mapDispatchToProps = (dispatch: Function) => {
  return {
    saveUserInfo: (logininfo: LoginInfo) => dispatch(saveUserInfo(logininfo)),
    setLoggedIn: (boolean: boolean) => dispatch(setLoggedIn(boolean)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
