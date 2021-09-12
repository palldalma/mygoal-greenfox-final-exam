import { FC, useState, SyntheticEvent, useEffect } from "react";
import { useHistory } from "react-router";
import { isDesktop } from "react-device-detect";
import { Modal } from "react-bootstrap";

import {
  NavLink,
  Nav,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo,
  SignInSection,
  Logout,
  BackBtn,
  Add,
} from "../../styles/navbar.styles";

import logo from "../../assets/logo.png";
import "../../styles/navbar.styles.css";
import "../../styles/heartshop.styles.css";
import HeartShop from "../heartshop/";
import Resources from "../resources/";

export interface NavbarProps {
  deleteUserInfo: Function;
  setLoggedIn: Function;
  loggedIn: boolean;
  backBtn: boolean;
}

const activeStyle = {
  backgroundColor: "#5252",
};

const Navbar: FC<NavbarProps> = ({ deleteUserInfo, loggedIn, backBtn }) => {
  const [visibility, setVisibility] = useState(isDesktop);

  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const showMenu = () => {
    setVisibility(!visibility);
  };

  const handleLogOut = async (event: SyntheticEvent) => {
    event.preventDefault();
    deleteUserInfo();
  };

  //backbtn
  const history = useHistory();

  const handleBack = (event: SyntheticEvent) => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Buy extra life</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HeartShop handleClose={handleClose} />
        </Modal.Body>
      </Modal>

      <Nav>
        <Logo>
          <NavLink to="/" style={{ border: "none", height: "60px" }}>
            <img src={logo} style={{ height: "40px" }} alt="logo" />
          </NavLink>
        </Logo>

        <Bars onClick={showMenu} />

        {loggedIn ? (
          <>
            <BackBtn
              onClick={handleBack}
              style={
                !backBtn
                  ? { pointerEvents: "none", color: "#5252" }
                  : { color: "#525252" }
              }
            ></BackBtn>
            <button id="heartshop" onClick={handleShow}>
              <Resources />
            </button>

            <SignInSection
              style={visibility ? { display: "flex" } : { display: "none" }}
            >
              <NavMenu>
                <NavLink
                  to="/create"
                  activeStyle={activeStyle}
                  onClick={() => {}}
                  id="dropdownitem"
                >
                  <Add />
                </NavLink>

                <NavLink
                  to="/users/logout"
                  activeStyle={activeStyle}
                  onClick={handleLogOut}
                  id="dropdownitem"
                >
                  <Logout />
                </NavLink>
              </NavMenu>
            </SignInSection>
          </>
        ) : (
          <SignInSection
            style={visibility ? { display: "flex" } : { display: "none" }}
          >
            <NavMenu>
              <NavLink to="/about" activeStyle={activeStyle}>
                About
              </NavLink>
            </NavMenu>
            <NavMenu>
              <NavLink to="/users/registration" activeStyle={activeStyle}>
                Sign Up
              </NavLink>
            </NavMenu>

            <NavBtn>
              <NavBtnLink to="/users/login">Sign In</NavBtnLink>
            </NavBtn>
          </SignInSection>
        )}
      </Nav>
    </>
  );
};

export default Navbar;
