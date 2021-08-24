import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const PlusSign = styled(AiOutlinePlus)`
  font-size: 30px;
  border-radius: 4px;
  border: 1px solid #525252;
  color: #525252;
`;

const MinusSign = styled(AiOutlineMinus)`
  font-size: 30px;
  border-radius: 4px;
  border: 1px solid #525252;
  color: #525252;
`;

const HeartshopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    height: 40vh;
    display: block;
  }
`;

export { PlusSign, HeartshopContainer, MinusSign };
