import { connect } from "react-redux";
import { QuestionWithRelevantAnswers } from "../../interfaces/courseinfo";
import { GemAndLives } from "../../interfaces/resourceinfo";

import { loadCourseToStore } from "../../store/actions/quizAction";
import { updateResourceState } from "../../store/actions/resourceAction";

import Quiz from "./Quiz";

const mapStateToProps = (state: any) => {
  const courseDetailsFromStore = state.course;
  const quizFromStore = state.quiz;
  const loading = state.loading;
  const token = state.user.token;
  const challenges = state.quiz.challenges;
  const loggedIn = state.loggedIn;
  const level = state.course.level;
  const userid = state.user.id;
  const { gem, lives } = state.resources;
  return {
    courseDetailsFromStore,
    quizFromStore,
    loading,
    token,
    challenges,
    loggedIn,
    level,
    userid,
    gem,
    lives,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    loadCourseToStore: (course: QuestionWithRelevantAnswers[]) =>
      dispatch(loadCourseToStore(course)),
    updateResourceState: (gemAndLives: GemAndLives) =>
      dispatch(updateResourceState(gemAndLives)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
