import { connect } from "react-redux";
import { QuestionWithRelevantAnswers } from "../../interfaces/courseinfo";

import { loadCourseToStore } from "../../store/actions/quizAction";

import Quiz from "./Quiz";

const mapStateToProps = (state: any) => {
  const courseDetailsFromStore = state.course;
  const quizFromStore = state.quiz;
  return {
    courseDetailsFromStore,
    quizFromStore,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    loadCourseToStore: (course: QuestionWithRelevantAnswers[]) =>
      dispatch(loadCourseToStore(course)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
