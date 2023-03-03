import React, { lazy, Suspense } from 'react'
import {
  Container,
  Image,
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
          <Col className="text-center">
            <Image
              alt="Trusted service"
              wdith="65"
              height="65"
              src="https://img.icons8.com/ios-filled/100/null/new-zealand-navigation.png"
            />
          </Col>
          <Col className="text-center">
            <Image
              alt="Warranty upheld"
              wdith="65"
              height="65"
              src="https://img.icons8.com/pastel-glyph/100/null/security-checked--v1.png"
            />
          </Col>
          <Col className="text-center">
            <Image
              alt="Eco-safe solution"
              wdith="65"
              height="65"
              src="https://img.icons8.com/external-outline-stroke-bomsymbols-/91/null/external-eco-green-energy-ecology-outline-stroke-bomsymbols--6.png"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h5 className="text-center">
              Trusted Service
            </h5>
          </Col>
          <Col>
            <h5 className="text-center">
              Uphold Warranties
            </h5>
          </Col>
          <Col>
            <h5 className="text-center">
              Eco-Safe Solution
            </h5>
          </Col>
        </Row>
        <hr />
      </Container>
      <Container>
        <Row>
          <h4 className="text-center">
            <IoLogoReact /> Commercial Service
            Plans
          </h4>
          <Col>
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
