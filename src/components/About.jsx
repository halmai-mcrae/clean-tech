import React from 'react'
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'

// Icons
import {
  FaEnvira,
  FaCheckCircle,
  FaLayerGroup,
  FaThumbsUp,
} from 'react-icons/fa'
// Styles
import './About.css'

const About = () => {
  return (
    <Container className="my-5">
      <Row>
        {/* <Col md={6}>
          <Image
            src="company-logo.png"
            alt="Company Logo"
            fluid
          />
        </Col> */}
        <Col>
          <div className="jumbotron">
            <p>
              Clean Tech Maintenance is a New
              Zealand owned and operated company
              that specialises in the maintenance
              of high performance roofing and
              cladding.
              We are a team of highly skilled
              tradespeople who have a passion for
              delivering quality workmanship and
              exceptional customer service.
            </p>
            <h4>
              <FaThumbsUp /> Tested Maintenance
              Solution
            </h4>
            <p>
              Our washes have been tested and
              assessed as per NZBC C/AS2:2019.
              Group rating of 2-S on Type 1 or 1-S
              on Type 3 substrates.
            </p>
            <h4>
              <FaEnvira /> Eco-Friendly
            </h4>
            <p>
              Water-based 100% Asbestos and
              Halogen free Low VOC (Limits, 5 gram
              – 49 gram) Non-Dangerous Good
              according to NZS 5433.
            </p>

            <h4>
              <FaCheckCircle /> Ease of
              Application
            </h4>
            <p>
              Our single component cleaners are
              designed for easy, slow release
              application that stays effective for
              up to three months. Whether you're
              managing a new construction project
              or need remediation work done, our
              solutions can service multiple
              purposes.
            </p>
            <h4>
              <FaLayerGroup /> Multi Substrate
            </h4>
            <p>
              Our washes are suitable for use on
              stainless steel, zinc, aluminium,
              solar panels and structural steel.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About
