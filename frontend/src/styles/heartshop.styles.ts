import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const PlusSign = styled(AiOutlinePlus)`
  font-size: 35px;
  border-radius: 4px;
  border: 1px solid #525252;
  color: #525252;

  &:hover {
    background-color: #5252;
  }
`;

const MinusSign = styled(AiOutlineMinus)`
  font-size: 35px;
  border-radius: 4px;
  border: 1px solid #525252;
  color: #525252;

  &:hover {
    background-color: #5252;
  }
`;

const HeartshopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    height: 40vh;
  }
`;

const SaveButton = styled.button`
  width: 200px;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  border: 1px solid #5252;
  color: #525252;
  display: flex;
  justify-content: space-evenly;
`;

export { PlusSign, HeartshopContainer, MinusSign, SaveButton };
