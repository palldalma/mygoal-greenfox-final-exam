import { connect } from "react-redux";

import StarterTranslationCourseSelector from "./StarterTranslationCourseSelector";

import { updateCourseid } from "../../../store/actions/courseAction";

// import { SelectedCourse } from "../../../interfaces/courseinfo";

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateCourseid: (selectedCourse: /* SelectedCourse*/ number) =>
      dispatch(updateCourseid(selectedCourse)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(StarterTranslationCourseSelector);

// export {};
