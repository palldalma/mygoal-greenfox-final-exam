import { connect } from "react-redux";

import Resources from "./Resources";

import {
  ResourceInfo,
  ResourcesInterface,
} from "../../interfaces/resourceinfo";

import { saveResources } from "../../store/actions/resourceAction";

const mapDispatchToProps = (dispatch: Function) => {
  return {
    saveResourcesREDUX: (resources: ResourcesInterface) =>
      dispatch(saveResources(resources)),
  };
};

// const mapStateToProps = (state: ResourceInfo) => {
//   const { resources } = state;
//   return {
//     resources,
//   };
// };

export default connect(null, mapDispatchToProps)(Resources);
