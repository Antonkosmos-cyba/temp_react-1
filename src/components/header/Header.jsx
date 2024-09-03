import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import { CustLink } from "../Customlink";

function Heder() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Hastja foreva</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fonttes">
            <Nav.Link>
              <CustLink to="/" className="no-underline">
                Главная
              </CustLink>
            </Nav.Link>
            <Nav.Link>
              <CustLink to="/roknrol" className="no-underline">
                Рок-н-Ролл
              </CustLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Heder;