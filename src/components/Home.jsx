import React, { lazy, Suspense } from 'react'
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'

// Components
import Contact from './Contact'
import Footer from './Footer'
import Packages from './Packages'

// Icons
import { IoLogoReact } from 'react-icons/io5'

const Home = () => {
  const Services = lazy(() =>
    import('./Services')
  )
  return (
    <>
      <Container className="jumbotron">
        <Row>
          <Col>
            <h4>
              <IoLogoReact /> Commercial
              Maintenance & Service Plans
            </h4>
            <p>
              Clean Tech Maintenance is a
              dedicated nationwide provider
              serving maintenance plans for
              commercial properties. We specialise
              in routine maintenance and
              maintenance plans with the goal to
              ensure the longevity and durability
              of your roof and/or cladding to
              fulfil and uphold the product
              warranty.
            </p>
          </Col>
        </Row>
      </Container>
      <Packages />
      <Suspense fallback={<div>Loading...</div>}>
        <Services />
      </Suspense>
      <Contact />
      <Footer />
    </>
  )
}

export default Home
