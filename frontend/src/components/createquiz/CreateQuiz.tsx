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

interface CreateQuizProps {
  token: string;
  id: string;
  updateLevelOfCustomQuestion: Function;
  updateCourseOfCustomQuestion: Function;
  customLevel: string;
  customCourse: string;
}

const CreateQuiz: FC<CreateQuizProps> = ({
  token,
  id,
  updateLevelOfCustomQuestion,
  updateCourseOfCustomQuestion,
  customLevel,
  customCourse,
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
  // const [isCourseFieldDisabled, setCourseFieldDisabled] = useState(true);
  const [courses, setCourses] = useState([{ id: 0, name: "" }]);
  const dispatch = useDispatch();

  let answers = [
    { answer: answer1, iscorrect: iscorrect1 },
    { answer: answer2, iscorrect: iscorrect2 },
    { answer: answer3, iscorrect: iscorrect3 },
    { answer: answer4, iscorrect: iscorrect4 },
  ];

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
  }, [customLevel, dispatch, id, token]);

  const handleSubmit = (newQuestion: string, answers: Answer[]) => {
    submitNewQuestion(customLevel, customCourse, newQuestion, answers, token);
  };

  return (
    <QuizContainer>
      <SelectorContainer>
        <select
          className="quizselector"
          name="levelselect"
          value={customLevel}
          onChange={(e) => {
            updateLevelOfCustomQuestion(e.target.value);
          }}
        >
          <option>Select Level</option>
          <option value="starter">Starter</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
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
      <Button onClick={() => handleSubmit(question, answers)}>SUBMIT</Button>
    </QuizContainer>
  );
};

export default CreateQuiz;
