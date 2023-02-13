import React from 'react'
import {
  Container,
  Image,
  Col,
  Row,
} from 'react-bootstrap'

// Photos
import cleantech0 from '../assets/cleantech0.png'
import cleantech1 from '../assets/cleantech1.png'
import cleantech2 from '../assets/cleantech2.png'
import cleantech3 from '../assets/cleantech3.png'
// import cleantech4 from '../assets/cleantech4.png'

//icons
import { GrBusinessService } from 'react-icons/gr'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { GiSolarPower } from 'react-icons/gi'
import { SiSeat } from 'react-icons/si'
import { BsShieldFillCheck } from 'react-icons/bs'

import './Services.css'

const Services = () => {
  return (
    <>
      <Container className="jumbotron">
        <h4 className="text-center">
          <GrBusinessService /> Our Services
        </h4>
        <Row>
          <Col md={6}>
            <Image
              src={cleantech0}
              alt="Power washing"
              fluid
              className="image-size"
            />
          </Col>
          <Col md={6}>
            <h6 className="text-center">
              <BsShieldFillCheck /> Warranty
              Protection
            </h6>
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
          </Col>
          <Col md={6}>
            <h6 className="text-center">
              <MdOutlineHealthAndSafety /> Health
              and Safety
            </h6>
            <p>
              Safe accessibility and a stable
              working platform is a key ingredient
              to our day to day operations. We
              have ample experience in the
              operating of scissor lifts, cherry
              pickers, extendable ladders and the
              construction of mobile scaffolding.
            </p>
            <p>
              Health and safety is our number one
              priority. We maintain a high
              standard of workplace consciousness
              and operate a job specific health
              and safety plan in accordance to the
              New Zealand Health and Safety at
              Work Act 2015. We are active members
              of NZ Site Safe and all our
              employees are IRATA working at
              heights qualified.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src={cleantech1}
              alt="Saftey harness"
              fluid
              className="image-size"
            />
          </Col>
          <Col md={6}>
            <Image
              src={cleantech3}
              alt="Solar panels"
              fluid
              className="image-size"
            />
          </Col>
          <Col md={6}>
            <h6 className="text-center">
              <GiSolarPower /> Solar Panels
            </h6>
            <p>
              Cleaning underneath rooftop solar
              panels are a vital part of a
              maintenance schedule. These areas
              remain unwashed by natural rain fall
              and experience large build up around
              “panel to roof” fixings which can
              lead to major leaks. This will often
              be where you can expect failures if
              not maintained regularly.
            </p>
            <p>
              Solar panel washes require a more
              sensitive approach. This service we
              perform by manual soft wash to
              ensure there is not excessive
              pressure applied to the panels, this
              keeping them protected, clean and
              corrosion free.
            </p>
          </Col>
          <Col>
            <h6 className="text-center">
              <SiSeat /> Stadium Seating
            </h6>
            <p>
              Seating is an essential aspect of
              any sports or entertainment venue.
              Providing comfortable and functional
              seating for spectators is crucial to
              creating a positive experience for
              fans. Regular maintenance of stadium
              seating is important to keep it in
              good condition and to ensure that
              fans have a comfortable place to sit
              during events.
            </p>
            <p>
              One important aspect of stadium
              seating maintenance is cleaning.
              Dirt, debris, and spills can
              accumulate on seats over time,
              making them look worn and
              unattractive. Regular cleaning helps
              to maintain the appearance of the
              seats and keep them looking like
              new.
            </p>
          </Col>
          <Col md={6}>
            <Image
              src={cleantech2}
              alt="Stadium seating"
              fluid
              className="image-size"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Services
