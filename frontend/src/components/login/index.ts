//ez a feliratkozás

import { connect } from "react-redux";

import Login from "./Login";

import { LoginInfo } from "../../interfaces/logininfo";

import { saveUserInfo } from "../../store/actions/userAction";

const mapDispatchToProps = (dispatch: Function) => {
  return {
    saveUserInfo: (logininfo: LoginInfo) => dispatch(saveUserInfo(logininfo)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
