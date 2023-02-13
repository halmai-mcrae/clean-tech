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
import { IoConstructSharp, IoAddCircle, IoLogoReact } from 'react-icons/io5'

// Styles
import './About.css'

const About = () => {
  return (
    <Container className="jumbotron">
      <Row>
        {/* <Col md={6}>
          <Image
            src="company-logo.png"
            alt="Company Logo"
            fluid
          />
        </Col> */}
        <Col>
        <h4 className='text-center'><IoLogoReact/> About</h4>
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
              solutions can serve multiple
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
            <h4>
                <IoConstructSharp /> Durable
              </h4>
              <p>
                We use only the correct materials
                as specified to ensure your roof
                stays within its warranty
                requirements. These products are
                designed to help withstand our
                harsh UV and coastal environments
                here in New Zealand providing
                long-lasting protection and peace
                of mind.
              </p>
              <h4>
              <IoAddCircle /> Reliable
            </h4>
            <p>
              When it comes to your maintenance,
              reliability is key. That's why we
              are committed to providing prompt
              and dependable services, no matter
              the size or complexity of the job.
              Our team of experts is always
              available to answer any questions
              and provide the support you need.
            </p>
              <p>
                Please contact us for more
                information and feel free to
                download our data information
                sheets.
              </p>
        </Col>
      </Row>
      <p className='copyright'>
      Copyright © 2022 Clean Technologies Ltd | All Rights Reserved
      </p>
    </Container>
  )
}

export default About
