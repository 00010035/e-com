import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import "../variables.scss";
import Container from "react-bootstrap/Container";

const header = () => {
  return (
    <header>
      <Navbar bg="light" variant="light" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img style={{ width: "13rem" }} src="/logo/logo_4.png "></img>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/rent">
              {" "}
              <i className="fa-solid fa-house"></i> Rent
            </Nav.Link>
            <Nav.Link href="/student">For Student</Nav.Link>
            <Nav.Link href="/login">
              {" "}
              <i className="fas fa-user"></i> Sign In
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default header;
