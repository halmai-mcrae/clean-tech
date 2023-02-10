import React, { lazy, Suspense } from 'react'
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'

// Components
import Footer from './Footer'

// Icons
import { BsShieldFillCheck } from 'react-icons/bs'
import { IoAddCircle } from 'react-icons/io5'
import { FaEnvira } from 'react-icons/fa'

const Home = () => {
  const Services = lazy(() =>
    import('./Services')
  )
  return (
    <>
      <Container className="jumbotron">
        <Row>
          <Col>
            <p>
              Clean Tech Maintenance is a
              dedicated nationwide provider
              serving maintenance plans for
              commercial properties. With years of
              experience and a highly trained team
              of professionals, we are equipped to
              best protect and maintain our
              customers' investments.
            </p>
            <p>
              We specialise in routine maintenance
              and maintenance plans with the goal
              to ensure the longevity and
              durability of your roof and/or
              cladding to fulfil and uphold the
              product warranty.
            </p>
            <h4>
              <BsShieldFillCheck /> Warranty
              Protection
            </h4>
            <p>
              Your roof and/or cladding is a
              significant investment, and we want
              to ensure it is protected. That's
              why we guarantee strict scheduling
              to fall within warranty
              requirements, along with annual
              reports to ensure that any possible
              claims are clear of dispute.
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
              <FaEnvira /> Eco-Friendly
            </h4>
            <p>
              Water-based 100% Asbestos and
              Halogen free Low VOC (Limits, 5 gram
              – 49 gram) Non-Dangerous Good
              according to NZS 5433.
            </p>
            <p>
              Please contact us for more
              information and feel free to
              download our data information
              sheets.
            </p>
          </Col>
        </Row>
      </Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Services />
      </Suspense>
      <Footer />
    </>
  )
}

export default Home
