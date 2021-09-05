import { FC, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { QuizLayout } from "../../interfaces/courseinfo";
import { UserInfo } from "../../interfaces/logininfo";
import { pullQuestions } from "../../services/translation-service";
import {
  AnswerBox,
  QuestionBox,
  QuizContainer,
} from "../../styles/quiz.styles";
import "../../styles/quiz.styles.css";

export interface QuizProps {}

const Quiz: FC<QuizProps> = () => {
  const state = useSelector((state) => state);
  const token = useSelector((state: UserInfo) => state.user.token);
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
  }, [state]);

  const testCourse = pullQuestions();
  console.log(testCourse);

  // {
  //   questionCollection: [
  //     {
  //       question: "question1",
  //       answers: [
  //         { answer: "answer1", iscorrect: 0 },
  //         { answer: "answer2", iscorrect: 0 },
  //         { answer: "answer3", iscorrect: 0 },
  //         { answer: "answer4", iscorrect: 1 },
  //       ],
  //     },
  //     {
  //       question: "question2",
  //       answers: [
  //         { answer: "answer1", iscorrect: 1 },
  //         { answer: "answer2", iscorrect: 0 },
  //         { answer: "answer3", iscorrect: 0 },
  //         { answer: "answer4", iscorrect: 0 },
  //       ],
  //     },
  //   ],
  // };

  return (
    <>
      {isLoggedIn ? (
        <QuizContainer>
          {/* {testCourse.questionCollection.map((question) => {
            return (
              <>
                <QuestionBox>{question.question}</QuestionBox>

                <div id="quizanswers">
                  <AnswerBox>{question.answers[0].answer}</AnswerBox>
                  <AnswerBox>{question.answers[1].answer}</AnswerBox>
                  <AnswerBox>{question.answers[2].answer}</AnswerBox>
                  <AnswerBox>{question.answers[3].answer}</AnswerBox>
                </div>
              </>
            );
          })} */}
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
