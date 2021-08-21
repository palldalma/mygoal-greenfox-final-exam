import { FC, useState, useEffect, SyntheticEvent } from "react";
import { useSelector } from "react-redux";
import { isDesktop } from "react-device-detect";
import { NavDropdown } from "react-bootstrap";

import {
  NavLink,
  Nav,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo,
  SignInSection,
  DropDownLink,
} from "../../styles/navbar.styles";
import { UserInfo } from "../../interfaces/logininfo";

import logo from "../../assets/logo.png";
import "../../styles/navbar.styles.css";
import Resources from "../resources/Resources";

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
      <Nav>
        <Logo>
          <NavLink to="/home" style={{ border: "none", height: "60px" }}>
            <img src={logo} style={{ height: "40px" }} />
          </NavLink>
        </Logo>

        <Bars onClick={showMenu} />

        {isLoggedIn ? (
          <>
            <Resources />
            <SignInSection
              style={visibility ? { display: "flex" } : { display: "none" }}
            >
              <NavMenu>
                <NavLink to="/mytests" activeStyle={activeStyle}>
                  My tests
                </NavLink>
              </NavMenu>

              <NavDropdown title={name} id="userdropdown">
                <NavDropdown.Item id="dropdownitem">
                  <DropDownLink
                    id="dropdownlink"
                    to="/users/logout"
                    onClick={handleLogOut}
                  >
                    Logout
                  </DropDownLink>
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
