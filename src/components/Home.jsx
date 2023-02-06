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
import { IoConstructSharp, IoAddCircle } from 'react-icons/io5'

const Home = () => {
  return (
    <>
    <Container className="my-5">
      <Row>
        <Col>
          <div className="jumbotron">
            <p>
              Clean Tech Maintenance is dedicated to providing
              top-notch services to keep your roof
              in optimal condition. With years of
              experience and a team of highly
              trained professionals, we are
              equipped to handle any roofing issue
              you may have. From routine
              maintenance to emergency repairs,
              our goal is to ensure the longevity
              and durability of your roof.
            </p>
            <p>
              We are a team of highly skilled
              tradespeople who have a passion for
              delivering quality workmanship and
              exceptional customer service.
            </p>
            <h4>
              <IoConstructSharp /> Durable
            </h4>
            <p>
              we use only the highest quality
              materials to ensure your roof can
              withstand the elements and maintain
              its strength over time. Our durable
              solutions are designed to provide
              long-lasting protection and peace of
              mind.
            </p>
            <h4>
              <IoAddCircle /> Reliable
            </h4>
            <p>
              When it comes to your roof,
              reliability is key. That's why we
              are committed to providing prompt
              and dependable services, no matter
              the size or complexity of the job.
              Our team of experts is always
              available to answer any questions
              and provide the support you need.
            </p>
            <h4>
              <BsShieldFillCheck /> Warranty Protection
            </h4>
            <p>
              Your roof is a significant
              investment, and we want to ensure it
              is protected. That's why we offer
              comprehensive warranty protection on
              all of our services, so you can have
              peace of mind knowing that your roof
              is in good hands. Contact us for
              more information on our warranty
              options.
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
