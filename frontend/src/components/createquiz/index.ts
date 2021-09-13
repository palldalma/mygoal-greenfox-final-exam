import { connect } from "react-redux";
import { updateLevelOfCustomQuestion } from "../../store/actions/customQuestionAction";

import CreateQuiz from "./CreateQuiz";

const mapStateToProps = (state: any) => {
  const { id, token } = state.user;
  const customQuestion = state.customQuestion;

  return {
    token,
    id,
    customQuestion,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateLevelOfCustomQuestion: (level: string) =>
      dispatch(updateLevelOfCustomQuestion(level)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuiz);
