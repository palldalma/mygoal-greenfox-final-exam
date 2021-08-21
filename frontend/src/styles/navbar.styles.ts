import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  font-family: "Helvetica Neue", sans-serif;
  background-color: #fff;
  border-top: 1px solid #5252;
  border-bottom: 1px solid #5252;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw-1000px) / 2);
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #525252;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;

  width: 100px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  height: 60px;

  &:hover {
    background: #5252;
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    width: 30vw;
    justify-content: flex-end;
    padding-right: 5vw;

    margin-bottom: 5px;
    margin-right: 5px;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #525252;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: center;
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 70px;
  margin-left: 5px;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

const NavBtnLink = styled(Link)`
  border-radius: 4px;
  font-weight: bold;
  padding: 0 1rem;
  columns: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #525252;
  width: 100px;
  border: 1px solid #5252;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #5252;
  }

  @media screen and (max-width: 768px) {
    border: none;
    justify-content: flex-end;
    width: 30vw;
    padding-right: 5vw;
  }
`;

const Logo = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 70px;

  @media screen and (max-width: 768px) {
    margin-left: 10px;
    width: 50px;
  }
`;

const SignInSection = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
    position: absolute;
    right: 0px;
    top: 80px;
    flex-direction: column;
    margin-top: 5px;
  }
`;

const DropDownLink = styled(Link)`
  /* @media screen and (max-width: 768px) {
  } */
`;

export {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo,
  SignInSection,
  DropDownLink,
};
