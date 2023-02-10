import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import {
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap'
import logo from '../assets/logo.svg'
import infosheet from '../assets/CleanTechInfoSheet.pdf'

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo}
          width="60"
          height="60"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
          <NavDropdown
            title="Information"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              as={Link}
              to="/about"
            >
              About
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              href={infosheet}
              target="_blank"
            >
              Download PDF Datasheet
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
