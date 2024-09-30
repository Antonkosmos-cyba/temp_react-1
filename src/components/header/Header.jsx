import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import "../../app.css";
import { CustLink } from "../Customlink";
import rock from "./hom.svg";

function Heder() {
  return (
    <Navbar expand="lg" className="bg-transparent" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Для Насти</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="but">
          <Nav className="me-auto fontes">
            <Nav.Link>
              <CustLink to="/" className="no-underline">
                <img className="ico" src={rock} alt="" />
              </CustLink>
            </Nav.Link>
            <Nav.Link>
              <CustLink to="/roknrol" className="no-underline">
                Рок-н-Ролл
              </CustLink>
            </Nav.Link>
            {/* <Nav.Link>
              <CustLink to="/rok" className="no-underline">
                Рок
              </CustLink>
            </Nav.Link> */}
            <Nav.Link>
              <CustLink to="/hard" className="no-underline">
                Хард-рок
              </CustLink>
            </Nav.Link>
            <Nav.Link>
              <CustLink to="/metal" className="no-underline">
                Метал
              </CustLink>
            </Nav.Link>
            <Nav.Link>
              <CustLink to="/trash" className="no-underline">
                Треш-рок
              </CustLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Heder;
