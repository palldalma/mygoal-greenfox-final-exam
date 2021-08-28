import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { GiCutDiamond } from "react-icons/gi";

const Lives = styled(AiFillHeart)`
  color: red;

  font-size: 25px;
`;

const Gems = styled(GiCutDiamond)`
  color: #4190ba;
  font-size: 25px;
`;

const LiveCounter = styled.div`
  color: black;
`;

const GemCounter = styled.div`
  color: black;
`;

const ResourceContainer = styled.div`
  height: 60px;
  width: 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: #5252;
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    right: 80px;
    position: absolute;
    top: 10px;
  }
`;

export { Lives, Gems, LiveCounter, GemCounter, ResourceContainer };
