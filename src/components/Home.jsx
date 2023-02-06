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
                maintain our customers
                investments.
              </p>
              <p>
                We specialise in routine
                maintenance and maintenance plans
                with the goal to ensure the
                longevity and durability of your
                roof and/or cladding to for-fill
                and uphold the product warranty.
              </p>
              <p>
                We are a team of highly skilled
                tradespeople who have a passion
                for delivering quality workmanship
                and exceptional customer service.
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
              <p>
                Please contact us for more
                information and feel free to
                download our data information
                sheets.
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
