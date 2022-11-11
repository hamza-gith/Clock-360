import React from "react";
import "./navbarthree.css";
import { Navbar, Container, NavDropdown,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarThree() {
  return (
    <Navbar collapseOnSelect expand="lg"  >
    <Container>
    <Navbar.Brand href="#home">
    <Link to="/clock360">     <img className="logo1" src="logo1.png" alt="" /> 
    </Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
       
      </Nav>
      <Nav>
   <Link to="/">     <Nav.Link href="#deets" className="faqs">Dashboard</Nav.Link></Link>
    <Link to="/Stake">    <Nav.Link href="#deets" className="faqs">Stake</Nav.Link></Link>
        <Nav.Link href="#deets" className="faqsDoc">Docs</Nav.Link>
        <Nav.Link href="#deets" className="faqsDoc">Socials</Nav.Link>
        <Nav.Link href="#deets" className="faqsDoc">$0.109612</Nav.Link>
        <div style={{display: "flex", alingItem: "center", justifyContent: "center"}}>
        <Nav.Link   href="#memes" className="btnavone">
          Connect Wallet
        </Nav.Link>
        </div>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavbarThree;
