import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function Navbar1() {
  return (
    <Navbar style={{ width: "98vw" }} collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/clock360">
            {" "}
            <img className="logo1" src="logo1.png" alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets" className="faq">
              FaQs
            </Nav.Link>
            <Nav.Link href="#deets" className="faq">
              Discord
            </Nav.Link>
            <Nav.Link href="#deets" className="faq">
              Telegram
            </Nav.Link>
            <Nav.Link href="#deets" className="faq11">
              Open App
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
