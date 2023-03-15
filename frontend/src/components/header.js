import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container } from "react-bootstrap";
import SearchAppBar from "./searchbtn.js";
// import "../variables.scss";

const header = () => {
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
            <LinkContainer to="/login">
              <Nav.Link>
                {" "}
                <i className="fas fa-user"></i> Sign In
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default header;
