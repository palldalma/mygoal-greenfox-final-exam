import { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  QuestionWithRelevantAnswers,
  QuizLayout,
} from "../../interfaces/courseinfo";
import { UserInfo } from "../../interfaces/logininfo";
import { pullQuestions } from "../../services/translation-service";
import {
  AnswerBox,
  QuestionBox,
  QuizContainer,
} from "../../styles/quiz.styles";
import "../../styles/quiz.styles.css";

export interface QuizProps {
  courseDetailsFromStore: any;
  loadCourseToStore: Function;
}

interface QuizState {
  quiz: {
    challenges: QuestionWithRelevantAnswers[];
  };
}

const Quiz: FC<QuizProps> = ({ courseDetailsFromStore, loadCourseToStore }) => {
  const token = useSelector((state: UserInfo) => state.user.token);
  const challenges = useSelector((state: QuizState) => state.quiz.challenges);
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const checkStore = (): void => {
      if (token) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    };
    checkStore();

    async function loadCourse() {
      await pullQuestions(courseDetailsFromStore.courseid).then((data) => {
        if (data.length !== 0 && data !== undefined) {
          console.log("belemegy");

          // const temp = data.questionCollection;
          // console.log(temp);

          // course = data.questionCollection;
          loadCourseToStore(data);
        }
      });
    }

    loadCourse();
  }, []);

  return (
    <>
      {isLoggedIn ? (
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
          <h1>You should login, buddy.</h1>
        </QuizContainer>
      )}
    </>
  );
};

export default Quiz;
