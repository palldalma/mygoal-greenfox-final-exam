import { connect } from "react-redux";
import { QuestionWithRelevantAnswers } from "../../interfaces/courseinfo";

import { loadCourseToStore } from "../../store/actions/quizAction";

import Quiz from "./Quiz";

const mapStateToProps = (state: any) => {
  const courseDetailsFromStore = state.course;
  const quizFromStore = state.quiz;
  const loading = state.loading;
  const token = state.user.token;
  const challenges = state.quiz.challenges;
  const loggedIn = state.loggedIn;
  const level = state.course.level;
  return {
    courseDetailsFromStore,
    quizFromStore,
    loading,
    token,
    challenges,
    loggedIn,
    level,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    loadCourseToStore: (course: QuestionWithRelevantAnswers[]) =>
      dispatch(loadCourseToStore(course)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
