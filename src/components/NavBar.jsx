import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";


const NavBar = () => {

  return (
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to="/">CLEAN TECH</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <NavDropdown title="Information" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Download PDF Infosheet</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;