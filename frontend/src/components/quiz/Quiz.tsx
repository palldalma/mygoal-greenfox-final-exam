import { FC, useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import {
  Answer,
  QuestionWithRelevantAnswers,
} from "../../interfaces/courseinfo";

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
  const [clickedStyle, setClickedStyle] = useState([{}]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [usedQuestions, setUsedQuestions] = useState([-1]);

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

    if (level) {
      loadCourse(level);
    }
  }, [
    courseDetailsFromStore.courseid,
    dispatch,
    level,
    loadCourseToStore,
    token,
  ]);

  const handleClick = (answer: Answer) => {
    checkAnswer(answer, token, userid, gem, lives).then((newResources) => {
      if (newResources?.gem !== undefined && newResources.lives !== undefined) {
        updateResourceState(newResources);
      }
    });
  };

  const styleResponse = (
    index: number,
    answer: Answer,
    answerindex: number
  ) => {
    if (answer.iscorrect === 1) {
      let newClickedStyle = [];
      newClickedStyle = [
        { backgroundColor: "#f0f5f5" },
        { backgroundColor: "#f0f5f5" },
        { backgroundColor: "#f0f5f5" },
        { backgroundColor: "#f0f5f5" },
      ];
      newClickedStyle[answerindex] = { backgroundColor: "green" };
      setClickedStyle(newClickedStyle);
      setCurrentIndex(index);
    } else {
      let newClickedStyle = [];
      newClickedStyle = [
        { backgroundColor: "#f0f5f5" },
        { backgroundColor: "#f0f5f5" },
        { backgroundColor: "#f0f5f5" },
        { backgroundColor: "#f0f5f5" },
      ];
      newClickedStyle[answerindex] = { backgroundColor: "red" };
      setClickedStyle(newClickedStyle);
      setCurrentIndex(index);
    }

    let tempUsedQuestions = [...usedQuestions];
    tempUsedQuestions[index] = index;
    setUsedQuestions(tempUsedQuestions);
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
                    {question.answers.map((answer, answerindex) => {
                      return (
                        <AnswerBox
                          key={answer.answer}
                          style={
                            currentIndex === index
                              ? clickedStyle[answerindex]
                              : usedQuestions.includes(index)
                              ? {
                                  backgroundColor: "#f0f5f5",
                                  color: "#c2d6d6",
                                }
                              : {}
                          }
                          disabled={
                            !usedQuestions.includes(index) ? false : true
                          }
                          onClick={(e) => {
                            handleClick(answer);
                            styleResponse(index, answer, answerindex);
                          }}
                        >
                          {question.answers[answerindex].answer}
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
