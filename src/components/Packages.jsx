import React from 'react'
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'

// Icons
import { BsCheck } from 'react-icons/bs'
import { AiFillFilePdf } from 'react-icons/ai'

// Styles
import './Packages.css'
import { IoLogoReact } from 'react-icons/io5'

const Packages = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="package-card-0" md={6}>
            <h6 className="text-center">
              <IoLogoReact /> New Substrate
              Maintenance Plan
            </h6>
            <hr />
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
              et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <BsCheck /> Lorem ipsum dolor sit
                amet.
              </li>
              <li>
                <BsCheck /> Lorem ipsum dolor sit
                amet.
              </li>
              <li>
                <BsCheck /> Lorem ipsum dolor sit
                amet.
              </li>
            </ul>
            <h6 className="text-center">
              <a href={''} target="_blank">
                <AiFillFilePdf /> Download PDF
                Infosheet.
              </a>
            </h6>
          </Col>
          <Col className="package-card-1" md={6}>
            <h6
              className="text-center"
              style={{ whiteSpace: 'nowrap' }}
            >
              <IoLogoReact /> Existing Structure
              Maintenance Plan
            </h6>
            <hr />
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
              et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <BsCheck /> Lorem ipsum dolor sit
                amet.
              </li>
              <li>
                <BsCheck /> Lorem ipsum dolor sit
                amet.
              </li>
              <li>
                <BsCheck /> Lorem ipsum dolor sit
                amet.
              </li>
            </ul>
            <h6 className="text-center">
              <a href={''} target="_blank">
                <AiFillFilePdf /> Download PDF
                Infosheet.
              </a>
            </h6>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Packages
