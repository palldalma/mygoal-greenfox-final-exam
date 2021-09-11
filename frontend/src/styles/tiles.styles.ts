import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { GiProgression } from "react-icons/gi";
import { GiSchoolBag } from "react-icons/gi";
import { MdSchool } from "react-icons/md";
import { FaHourglassStart } from "react-icons/fa";
import { BsBookHalf } from "react-icons/bs";

const TileContainer = styled.div`
  width: 40vw;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }
`;

const Tile = styled(Link)`
  color: #525252;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  margin: 5px;

  width: 130px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  height: 130px;

  &:hover {
    filter: brightness(70%);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 1342px) {
    margin-bottom: 10px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    width: 100px;
    height: 100px;
  }
`;

const Starter = styled(FaHourglassStart)`
  width: 50px;
  height: 50px;
`;

const Beginner = styled(GiSchoolBag)`
  width: 50px;
  height: 50px;
`;
const Intermediate = styled(GiProgression)`
  width: 50px;
  height: 50px;
`;
const Advanced = styled(MdSchool)`
  width: 50px;
  height: 50px;
`;
const TranslationIcon = styled(BsBookHalf)`
  width: 50px;
  height: 50px;
`;

export {
  Tile,
  Beginner,
  Intermediate,
  Advanced,
  Starter,
  TileContainer,
  TranslationIcon,
};
