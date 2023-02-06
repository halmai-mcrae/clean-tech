import React from 'react'
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'

// Components
import Footer from './Footer'

// Icons
import { BsShieldFillCheck } from 'react-icons/bs'
import {
  IoConstructSharp,
  IoAddCircle,
} from 'react-icons/io5'
import {
  FaEnvira,
  FaCheckCircle,
  FaLayerGroup,
  FaThumbsUp,
} from 'react-icons/fa'

const Home = () => {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col>
            <div className="jumbotron">
              <p>
                Clean Tech Maintenance is a
                dedicated nationwide provider
                serving maintenance plans for
                commercial properties. With years
                of experience and a highly trained
                team of professionals, we are
                equipped to best protect and
                maintain our customers'
                investments.
              </p>
              <p>
                We specialise in routine
                maintenance and maintenance plans
                with the goal to ensure the
                longevity and durability of your
                roof and/or cladding to fulfil
                and uphold the product warranty.
              </p>
              <p>
                We are a team of highly skilled
                tradespeople who have a passion
                for delivering quality workmanship
                and exceptional customer service.
              </p>
              <h4>
                <BsShieldFillCheck /> Warranty
                Protection
              </h4>
              <p>
                Your roof and/or cladding is a
                significant investment, and we
                want to ensure it is protected.
                That's why we guarantee strict
                scheduling to fall within warranty
                requirements, along with annual
                reports to ensure that any
                possible claims are clear of
                dispute.
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
              <p>
                Please contact us for more
                information and feel free to
                download our data information
                sheets.
              </p>            <h4>
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
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Home
