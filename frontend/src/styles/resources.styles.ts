import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { GiCutDiamond } from "react-icons/gi";

const Lives = styled(AiFillHeart)`
  color: red;
  margin-right: 5px;
  font-size: 25px;
`;

const Gems = styled(GiCutDiamond)`
  margin-left: 15px;
  margin-right: 5px;
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
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    right: 100px;
    position: absolute;
  }
`;

export { Lives, Gems, LiveCounter, GemCounter, ResourceContainer };
