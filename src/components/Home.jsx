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
      <Container>
        <Row>
          <Col>
            <h4 className="text-center">
              <IoLogoReact /> Commercial
              Maintenance & Service Plans
            </h4>
            <br />
            <p>
              Clean Tech Wash & Maintenance is a
              dedicated nationwide provider
              serving maintenance plans for
              commercial properties. We specialise
              in routine maintenance washes along
              with annual reports to ensure
              longevity and the durability of your
              roof and/or wall cladding. We
              understand the investment that goes
              into replacing these materials, so
              our aim is to maintain and protect
              your substrates to prolong their
              life and uphold their material
              warranties.
            </p>
            <br />
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
