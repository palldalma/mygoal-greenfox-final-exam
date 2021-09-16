import { FC, useState, useEffect } from "react";

import {
  AnswerContainer,
  QuizContainer,
  SelectorContainer,
} from "../../styles/quiz.styles";

import { Button } from "../../styles/form.styles";
import "../../styles/quiz.styles.css";
import { Answer } from "../../interfaces/courseinfo";
import { submitNewQuestion } from "../../services/submit-quiz-service";
import { useDispatch } from "react-redux";
import { listCourses } from "../../services/translation-service";
import {
  hideLoadingSign,
  showLoadingSign,
} from "../../store/actions/loadingAction";
import { Redirect } from "react-router";
import swal from "sweetalert";

interface CreateQuizProps {
  token: string;
  id: string;
  updateLevelOfCustomQuestion: Function;
  updateCourseOfCustomQuestion: Function;
  customLevel: string;
  customCourse: string;
  loggedIn: boolean;
}

const CreateQuiz: FC<CreateQuizProps> = ({
  token,
  id,
  updateLevelOfCustomQuestion,
  updateCourseOfCustomQuestion,
  customLevel,
  customCourse,
  loggedIn,
}) => {
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [iscorrect1, setIsCorrect1] = useState(0);
  const [iscorrect2, setIsCorrect2] = useState(0);
  const [iscorrect3, setIsCorrect3] = useState(0);
  const [iscorrect4, setIsCorrect4] = useState(0);
  const [courses, setCourses] = useState([{ id: 0, name: "" }]);
  const [levels, setLevels] = useState([
    "Select Level",
    "starter",
    "beginner",
    "intermediate",
    "advanced",
  ]);
  const dispatch = useDispatch();

  let answers = [
    { answer: answer1, iscorrect: iscorrect1 },
    { answer: answer2, iscorrect: iscorrect2 },
    { answer: answer3, iscorrect: iscorrect3 },
    { answer: answer4, iscorrect: iscorrect4 },
  ];

  const clearForm = () => {
    setQuestion("");
    setAnswer1("");
    setAnswer2("");
    setAnswer3("");
    setAnswer4("");
    setIsCorrect1(0);
    setIsCorrect2(0);
    setIsCorrect3(0);
    setIsCorrect4(0);
    updateCourseOfCustomQuestion("");
    updateLevelOfCustomQuestion("");
    setCourses([{ id: 0, name: "" }]);
  };

  const handleSelect = (event: any, position: number) => {
    if (event.target.value === "on") {
      if (position === 0) {
        setIsCorrect1(1);
        setIsCorrect2(0);
        setIsCorrect3(0);
        setIsCorrect4(0);
      }
      if (position === 1) {
        setIsCorrect2(1);
        setIsCorrect1(0);
        setIsCorrect3(0);
        setIsCorrect4(0);
      }
      if (position === 2) {
        setIsCorrect3(1);
        setIsCorrect1(0);
        setIsCorrect2(0);
        setIsCorrect4(0);
      }
      if (position === 3) {
        setIsCorrect4(1);
        setIsCorrect1(0);
        setIsCorrect2(0);
        setIsCorrect3(0);
      }
    }
  };

  useEffect(() => {
    //this fills up the course selector element
    function getMyCourses() {
      dispatch(showLoadingSign(`/${customLevel}/tranlation`));
      const level = customLevel;
      listCourses(id, token, level).then((data) => {
        if (data.courses) {
          setCourses(data.courses);
        }

        if (customCourse === "" && data.courses !== undefined) {
          updateCourseOfCustomQuestion(data.courses[0].name);
        }
      });
      dispatch(hideLoadingSign(`/${customLevel}/tranlation`));
    }

    if (customLevel) {
      getMyCourses();
    }
  }, [
    customLevel,
    dispatch,
    id,
    token,
    customCourse,
    updateCourseOfCustomQuestion,
  ]);

  const handleSubmit = (newQuestion: string, answers: Answer[]) => {
    const submission = submitNewQuestion(
      customLevel,
      customCourse,
      newQuestion,
      answers,
      token
    ).then((result) => {
      if (result) {
        if (result.error) {
          swal({
            title: "Oh-oh!",
            text: "Submission failed.",
            icon: "error",
          });
        }
        if (result.success) {
          swal({
            title: "Good job!",
            text: "Your question has been submitted.",
            icon: "success",
          });
          clearForm();
        }
      }
    });
  };

  return (
    <>
      {loggedIn ? (
        <QuizContainer>
          <SelectorContainer>
            <select
              className="quizselector"
              name="levelselect"
              value={customLevel}
              onChange={(e) => {
                updateLevelOfCustomQuestion(e.target.value);
                updateCourseOfCustomQuestion("");
              }}
            >
              {levels.map((level, index) => {
                return <option key={index}>{level}</option>;
              })}
            </select>
          </SelectorContainer>
          <SelectorContainer>
            {/* ide dinamikusan kell betölteni a témákat */}
            <select
              disabled={
                customLevel === "starter" ||
                customLevel === "beginner" ||
                customLevel === "intermediate" ||
                customLevel === "advanced"
                  ? false
                  : true
              }
              className="quizselector"
              name="courseselect"
              value={customCourse}
              onChange={(e) => {
                updateCourseOfCustomQuestion(e.target.value);
              }}
            >
              {
                /*isCourseFieldDisabled &&*/
                courses.map((course, index) => {
                  return <option key={index}>{course.name}</option>;
                })
              }
            </select>
          </SelectorContainer>

          <SelectorContainer>
            <input
              className="quizselector"
              type="text"
              placeholder="Write your question here."
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
              }}
            />
          </SelectorContainer>

          <AnswerContainer>
            <input
              className="quizselector"
              type="text"
              value={answer1}
              onChange={(e) => {
                setAnswer1(e.target.value);
              }}
            />
            <input
              type="radio"
              name="iscorrect"
              style={{ alignSelf: "center", justifySelf: "center" }}
              onChange={(e) => handleSelect(e, 0)}
            />

            <input
              type="text"
              className="quizselector"
              value={answer2}
              onChange={(e) => {
                setAnswer2(e.target.value);
              }}
            />
            <input
              type="radio"
              name="iscorrect"
              style={{ alignSelf: "center", justifySelf: "center" }}
              onChange={(e) => handleSelect(e, 1)}
            />

            <input
              type="text"
              className="quizselector"
              value={answer3}
              onChange={(e) => {
                setAnswer3(e.target.value);
              }}
            />
            <input
              type="radio"
              name="iscorrect"
              style={{ alignSelf: "center", justifySelf: "center" }}
              onChange={(e) => handleSelect(e, 2)}
            />

            <input
              type="text"
              className="quizselector"
              value={answer4}
              onChange={(e) => {
                setAnswer4(e.target.value);
              }}
            />
            <input
              type="radio"
              name="iscorrect"
              style={{ alignSelf: "center", justifySelf: "center" }}
              onChange={(e) => handleSelect(e, 3)}
            />
          </AnswerContainer>
          <Button onClick={() => handleSubmit(question, answers)}>
            SUBMIT
          </Button>
        </QuizContainer>
      ) : (
        <Redirect to={{ pathname: "/users/login" }} />
      )}
    </>
  );
};

export default CreateQuiz;
