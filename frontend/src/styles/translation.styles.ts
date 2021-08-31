import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const CourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const TranslationTopic = styled(Link)`
  background-color: pink;
  color: black;

  display: flex;
  align-items: center;

  text-decoration: none;
  padding: 0 1rem;

  width: 60vw;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  height: 50px;
  margin-bottom: 3px;

  &:hover {
    filter: brightness(70%);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;

export { TranslationTopic, CourseContainer };
