import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import SearchAppBar from "./searchbtn.js";
import { Logout } from "../actions/userAction.js";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(Logout());
  };

  return (
    <header>
      <Navbar bg="light" variant="light" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img style={{ width: "13rem" }} src="/logo/logo_4.png "></img>
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="ml-auto">
            <Nav.Link>
              <SearchAppBar />
            </Nav.Link>
            <LinkContainer to="/rent">
              <Nav.Link>
                {" "}
                <i className="fa-solid fa-house"></i> Rent
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/student">
              <Nav.Link>For Student</Nav.Link>
            </LinkContainer>
            {userInfo?.name ? (
              <NavDropdown title={userInfo.name} id="username">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link>
                  {" "}
                  <i className="fas fa-user"></i> Sign In
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
