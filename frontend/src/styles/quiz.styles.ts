import styled from "styled-components";
import { ImBin } from "react-icons/im";

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  box-sizing: border-box;
  height: 85vh;
  overflow: auto;

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const QuestionBox = styled.div`
  margin-top: 20px;
  background-color: pink;
  color: black;
  justify-content: space-between;

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

const SelectorContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;

  text-decoration: none;
  padding: 0;

  border-radius: 4px;
  width: 60vw;

  height: 50px;
  margin-bottom: 3px;

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

const AnswerContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 8fr 1fr;
  grid-row-gap: 3px;

  text-decoration: none;
  padding: 0;

  border-radius: 4px;
  width: 60vw;

  height: 212px;
  margin-bottom: 3px;

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

const TrashBtn = styled.button`
  height: 80%;
  width: 50px;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  border-radius: 4px;
  background-color: white;

  &:hover {
    filter: brightness(70%);
    transition: all 0.2s ease-in-out;
  }
`;

const Trash = styled(ImBin)``;

export {
  QuizContainer,
  QuestionBox,
  AnswerBox,
  SelectorContainer,
  AnswerContainer,
  Trash,
  TrashBtn,
};
