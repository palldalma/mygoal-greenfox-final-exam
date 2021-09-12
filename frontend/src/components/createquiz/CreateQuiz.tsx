import { FC } from "react";

import { Redirect } from "react-router";
import { UserForm } from "../../styles/form.styles";
import { Form } from "react-bootstrap";
import {
  AnswerBox,
  AnswerContainer,
  QuestionBox,
  QuizContainer,
  SelectorContainer,
} from "../../styles/quiz.styles";
import "../../styles/quiz.styles.css";

interface CreateQuizProps {}

const CreateQuiz: FC<CreateQuizProps> = () => {
  return (
    <QuizContainer>
      <SelectorContainer>
        <Form.Select aria-label="Default select example">
          <option>Select level</option>
          <option value="starter">Starter</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </Form.Select>
      </SelectorContainer>
      <SelectorContainer>
        {/* ide dinamikusan kell betölteni a témákat */}
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </SelectorContainer>

      <SelectorContainer>
        <input type="text" placeholder="Write your question here." />
      </SelectorContainer>

      <AnswerContainer>
        <input type="text" />
        <input
          type="radio"
          value="1"
          name="iscorrect"
          style={{ alignSelf: "center", justifySelf: "center" }}
        />

        <input type="text" />
        <input
          type="radio"
          value="2"
          name="iscorrect"
          style={{ alignSelf: "center", justifySelf: "center" }}
        />

        <input type="text" />
        <input
          type="radio"
          value="3"
          name="iscorrect"
          style={{ alignSelf: "center", justifySelf: "center" }}
        />

        <input type="text" />
        <input
          type="radio"
          value="4"
          name="iscorrect"
          style={{ alignSelf: "center", justifySelf: "center" }}
        />
      </AnswerContainer>
    </QuizContainer>
  );
};

export default CreateQuiz;
