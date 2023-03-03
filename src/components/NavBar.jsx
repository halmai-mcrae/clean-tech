import React, {
  useState,
  useEffect,
  useRef,
} from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  Nav,
  NavDropdown,
} from 'react-bootstrap'

// Icons
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
} from 'react-icons/fa'

// Styles
import './NavBar.css'

// Assets
import logo from '../assets/logo.svg'
import infosheet from '../assets/CleanTechInfoSheet.pdf'

const NavBar = () => {
  const [expanded, setExpanded] = useState(false)
  const navbarRef = useRef(null)

  const handleLinkClick = () => {
    setExpanded(false)
  }

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setExpanded(false)
      }
    }

    document.addEventListener(
      'click',
      handleDocumentClick
    )

    return () => {
      document.removeEventListener(
        'click',
        handleDocumentClick
      )
    }
  }, [])
  return (
    <Navbar
      ref={navbarRef}
      expand="lg"
      expanded={expanded}
    >
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo}
          width="50"
          height="55"
          alt="Logo"
        />
        <span
          style={{
            fontWeight: '700',
          }}
        >
          CLEAN
          <span
            style={{
              color: '#3c8297',
            }}
          >
            TECH
          </span>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() =>
          setExpanded(
            expanded ? false : 'expanded'
          )
        }
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            as={Link}
            to="/"
            onClick={handleLinkClick}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contact"
            onClick={handleLinkClick}
          >
            Contact
          </Nav.Link>
          <NavDropdown
            title="Information"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              as={Link}
              to="/about"
              onClick={handleLinkClick}
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
        <Nav className="ml-auto">
          <Nav.Link href="tel:+64 27 365 8483">
            <FaPhone />
          </Nav.Link>
          <Nav.Link href="mailto:admin@cleantechmaintenance.co.nz">
            <FaEnvelope />
          </Nav.Link>
          <Nav.Link
            target="_blank"
            href="https://www.linkedin.com/company/clean-tech-maintenance/"
          >
            <FaLinkedin />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
