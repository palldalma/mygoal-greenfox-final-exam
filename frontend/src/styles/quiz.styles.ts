import styled from "styled-components";

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  box-sizing: border-box;
`;

const QuestionBox = styled.div`
  margin-top: 20px;
  background-color: pink;
  color: black;

  display: flex;
  align-items: center;

  text-decoration: none;
  padding: 0 1rem;

  width: 60vw;

  border-radius: 4px;

  height: 50px;
  margin-bottom: 3px;

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

const AnswerBox = styled.button`
  color: #525252;
  border: none;
  outline: none;
  text-decoration: none;
  background-color: #5252;

  padding: 0 1rem;

  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  height: 50px;

  &:hover {
    background-color: #525252;
    transition: all 0.2s ease-in-out;
    color: white;
  }

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-left: 0;
  }
`;

export { QuizContainer, QuestionBox, AnswerBox };
