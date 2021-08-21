import { connect } from "react-redux";

import Navbar from "./Navbar";

import { deleteUserInfo } from "../../store/actions/userAction";

const mapDispatchToProps = (dispatch: Function) => {
  return {
    deleteUserInfo: () => dispatch(deleteUserInfo()),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
