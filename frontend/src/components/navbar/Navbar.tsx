import { FC, useState, useEffect, SyntheticEvent } from "react";
import { useSelector } from "react-redux";
import { isDesktop } from "react-device-detect";
import { NavDropdown, Button, Modal } from "react-bootstrap";
// import { saveResources } from "../../store/actions/resourceAction";

import {
  NavLink,
  Nav,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo,
  SignInSection,
} from "../../styles/navbar.styles";
import { UserInfo } from "../../interfaces/logininfo";
import Resources from "../resources/Resources";

import logo from "../../assets/logo.png";
import "../../styles/navbar.styles.css";
import "../../styles/heartshop.styles.css";
import HeartShop from "../heartshop/Heartshop";
import resources from "../resources";

export interface NavbarProps {
  deleteUserInfo: Function;
}

const activeStyle = {
  backgroundColor: "#5252",
};

const Navbar: FC<NavbarProps> = ({ deleteUserInfo }) => {
  const [visibility, setVisibility] = useState(isDesktop);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const state = useSelector((state) => state);
  const token = useSelector((state: UserInfo) => state.user.token);
  const name = useSelector((state: UserInfo) => state.user.name);

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //

  const showMenu = () => {
    setVisibility(!visibility);
  };

  const handleLogOut = async (event: SyntheticEvent) => {
    event.preventDefault();
    console.log("ki akarok lépni");
    deleteUserInfo();
  };

  useEffect(() => {
    const checkStorage = (): void => {
      if (token) {
        setLoggedIn(true);
        console.log("you are logged in");
      } else {
        setLoggedIn(false);
        console.log("you are logged out");
      }
    };
    checkStorage();
  }, [state]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Buy extra life</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HeartShop />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Nav>
        <Logo>
          <NavLink to="/home" style={{ border: "none", height: "60px" }}>
            <img src={logo} style={{ height: "40px" }} alt="logo" />
          </NavLink>
        </Logo>

        <Bars onClick={showMenu} />

        {isLoggedIn ? (
          <>
            <button id="heartshop" onClick={handleShow}>
              {/* <Resources /> */}
            </button>

            <SignInSection
              style={visibility ? { display: "flex" } : { display: "none" }}
            >
              <NavMenu>
                <NavLink to="/users/resources" activeStyle={activeStyle}>
                  My tests
                </NavLink>
              </NavMenu>

              <NavDropdown title={name} id="userdropdown">
                <NavDropdown.Item
                  id="dropdownitem"
                  to="/users/logout"
                  onClick={handleLogOut}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
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
