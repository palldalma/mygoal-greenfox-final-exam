import { FC, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import {
  Answer,
  QuestionWithRelevantAnswers,
  QuizLayout,
} from "../../interfaces/courseinfo";
import { UserInfo } from "../../interfaces/logininfo";
import { checkAnswer } from "../../services/answer-check-service";

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

export interface QuizProps {
  courseDetailsFromStore: any;
  loadCourseToStore: Function;
  loading: string[];
  token: string;
  challenges: QuestionWithRelevantAnswers[];
  loggedIn: boolean;
  level: string;
  gem: number;
  lives: number;
  userid: string;
  updateResourceState: Function;
}

const Quiz: FC<QuizProps> = ({
  courseDetailsFromStore,
  loadCourseToStore,
  token,
  challenges,
  loggedIn,
  level,
  gem,
  lives,
  userid,
  updateResourceState,
}) => {
  const dispatch = useDispatch();
  const [challengesLoaded, setChallengesLoaded] = useState(false);

  useEffect(() => {
    async function loadCourse(level: string) {
      dispatch(showLoadingSign(`${level}/translation`));
      await pullQuestions(courseDetailsFromStore.courseid, token, level).then(
        (data) => {
          if (data.length !== 0 && data !== undefined) {
            loadCourseToStore(data);
            setChallengesLoaded(true);
          }
        }
      );

      dispatch(hideLoadingSign(`${level}/translation`));
    }

    loadCourse(level);
  }, []);

  const handleClick = (answer: Answer) => {
    const lostLives = checkAnswer(answer, token, userid, gem, lives).then(
      (newResources) => {
        if (
          newResources?.gem !== undefined &&
          newResources.lives !== undefined
        ) {
          updateResourceState(newResources);
        }
      }
    );
  };

  return (
    <>
      {loggedIn ? (
        <QuizContainer>
          {challengesLoaded &&
            challenges.map((question, index) => {
              return (
                <div key={index}>
                  <QuestionBox>{question.question}</QuestionBox>

                  <div id="quizanswers">
                    {question.answers.map((answer, index) => {
                      return (
                        <AnswerBox
                          key={index}
                          onClick={() => {
                            handleClick(answer);
                          }}
                        >
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
        <Redirect to={{ pathname: "/users/login" }} />
      )}
    </>
  );
};

export default Quiz;
