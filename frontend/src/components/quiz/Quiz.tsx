import { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  QuestionWithRelevantAnswers,
  QuizLayout,
} from "../../interfaces/courseinfo";
import { UserInfo } from "../../interfaces/logininfo";
import { pullQuestions } from "../../services/translation-service";
import {
  hideLoadingSign,
  showLoadingSign,
} from "../../store/actions/loadingAction";
import {
  AnswerBox,
  QuestionBox,
  QuizContainer,
} from "../../styles/quiz.styles";
import "../../styles/quiz.styles.css";
import Loader from "../loading/";

export interface QuizProps {
  courseDetailsFromStore: any;
  loadCourseToStore: Function;
  loading: string[];
  token: string;
  challenges: QuestionWithRelevantAnswers[];
  loggedIn: boolean;
}

const Quiz: FC<QuizProps> = ({
  courseDetailsFromStore,
  loadCourseToStore,
  loading,
  token,
  challenges,
  loggedIn,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadCourse() {
      dispatch(showLoadingSign("starter/translation"));
      await pullQuestions(courseDetailsFromStore.courseid, token).then(
        (data) => {
          if (data.length !== 0 && data !== undefined) {
            loadCourseToStore(data);
          }
        }
      );

      dispatch(hideLoadingSign("starter/translation"));
    }

    loadCourse();
  }, []);

  return (
    <>
      {loggedIn && loading.length === 0 ? (
        <QuizContainer>
          {challenges.map((question, index) => {
            return (
              <div key={index}>
                <QuestionBox>{question.question}</QuestionBox>

                <div id="quizanswers">
                  {question.answers.map((answer, index) => {
                    return (
                      <AnswerBox key={index}>
                        {question.answers[index].answer}
                      </AnswerBox>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </QuizContainer>
      ) : (
        <QuizContainer>
          <Loader />
        </QuizContainer>
      )}
    </>
  );
};

export default Quiz;
