import React from "react";
import "./navtwo.css";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarTwo() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            {" "}
            <img className="logo1" src="logo1.png" alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets" className="faqs">
              Dashboard
            </Nav.Link>
            <Link to="/Stake">
              {" "}
              <Nav.Link href="#deets" className="faqs">
                Stake
              </Nav.Link>
            </Link>
            <Nav.Link href="#deets" className="faqs">
              Docs
            </Nav.Link>
            <Nav.Link href="#deets" className="faqs">
              Socials
            </Nav.Link>
            <div
              style={{
                display: "flex",
                alingItem: "center",
                justifyContent: "center",
              }}
            >
              <Nav.Link href="#memes" className="btnavone">
                Connect Wallet
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTwo;
