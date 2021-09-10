import { connect } from "react-redux";

import ListOfCourses from "./ListOfCourses";

import { updateCourseid } from "../../store/actions/courseAction";

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateCourseid: (selectedCourse: number) =>
      dispatch(updateCourseid(selectedCourse)),
  };
};

const mapStateToProps = (state: any) => {
  const loggedIn = state.loggedIn;
  const level = state.course.level;
  const token = state.user.token;
  const id = state.user.id;

  return {
    loggedIn,
    level,
    token,
    id,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListOfCourses);
