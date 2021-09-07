import { connect } from "react-redux";

import Loader from "./Loader";

export interface State {
  loading: string[];
}

const mapStateToProps = (state: State) => {
  const { loading } = state;
  return {
    loading,
  };
};

export default connect(mapStateToProps)(Loader);
