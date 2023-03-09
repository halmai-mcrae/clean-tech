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
import warranty from '../assets/warranty.png'
import newzealand from '../assets/newzealand.png'
import ecosafe from '../assets/ecosafe.png'

// Styles
import './Home.css'

const Home = () => {
  const Services = lazy(() =>
    import('./Services')
  )
  return (
    <>
      <div className="landing">
        <Container>
          <Row>
            <Col className="text-center">
              <Image
                className="home-icons"
                alt="Trusted service"
                wdith="60"
                height="60"
                src={newzealand}
              />
            </Col>
            <Col className="text-center">
              <Image
                className="home-icons"
                alt="Warranty upheld"
                wdith="60"
                height="60"
                src={warranty}
              />
            </Col>
            <Col className="text-center">
              <Image
                className="home-icons"
                alt="Eco-safe solution"
                wdith="60"
                height="60"
                src={ecosafe}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h5 className="text-center icontext">
                Trusted
                <br />
                Service
              </h5>
            </Col>
            <Col>
              <h5 className="text-center icontext">
                Uphold
                <br />
                Warranties
              </h5>
            </Col>
            <Col>
              <h5 className="text-center icontext">
                Eco-Safe
                <br />
                Solution
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <h4 className="text-center home">
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
