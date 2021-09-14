import { connect } from "react-redux";
import {
  updateLevelOfCustomQuestion,
  updateCourseOfCustomQuestion,
} from "../../store/actions/customQuestionAction";

import CreateQuiz from "./CreateQuiz";

const mapStateToProps = (state: any) => {
  const { id, token } = state.user;
  const customCourse = state.customCourse;
  const customLevel = state.customLevel;

  return {
    token,
    id,
    customCourse,
    customLevel,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateLevelOfCustomQuestion: (level: string) =>
      dispatch(updateLevelOfCustomQuestion(level)),
    updateCourseOfCustomQuestion: (course: string) =>
      dispatch(updateCourseOfCustomQuestion(course)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuiz);
