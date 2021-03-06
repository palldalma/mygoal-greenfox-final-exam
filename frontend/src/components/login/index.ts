//ez a feliratkozás

import { connect } from "react-redux";

import Login from "./Login";

import { saveUserInfo } from "../../store/actions/userAction";
import { LoginInfo } from "../../interfaces/logininfo";

const mapDispatchToProps = (dispatch: Function) => {
  return {
    saveUserInfo: (logininfo: LoginInfo) => dispatch(saveUserInfo(logininfo)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
