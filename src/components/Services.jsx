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
import cleantech5 from '../assets/cleantech5.png'

// Icons
import { GrBusinessService } from 'react-icons/gr'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { GiSolarPower } from 'react-icons/gi'
import { SiSeat } from 'react-icons/si'
import { BsShieldFillCheck } from 'react-icons/bs'
import { TbBellSchool } from 'react-icons/tb'

// Styles
import './Services.css'

const Services = () => {
  return (
    <>
      <h4 className="text-center home">
        <GrBusinessService /> Our Services
      </h4>
      <Container className="jumbotron">
        <Row>
          <Col xs={12} md={12} lg={6}>
            <Image
              src={cleantech0}
              alt="Power washing"
              fluid
              className="image-size"
            />
          </Col>
          <Col xs={12} md={12} lg={6}>
            <h5 className="text-center title">
              <BsShieldFillCheck /> Warranty
              Protection
            </h5>
            <p>
              Your roof and/or cladding is a
              significant investment, and we want
              to ensure it is protected. We
              understand the importance of strict
              scheduling, not only to deal with
              New Zealand’s harsh environment but
              also to ensure it falls within your
              products warranty requirements.
              Along with our annual reports we
              offer a Clean Tech Care Certificate
              of health to ensure that any
              concerns are reported, logged and
              cared for.
            </p>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <h5 className="text-center title">
              <GiSolarPower /> Solar Panels
            </h5>
            <p>
              Solar panel washes require a more
              sensitive approach. This service we
              perform by manual soft wash and
              rinse to ensure there is not
              excessive pressure applied to the
              panels, this keeping them protected,
              clean, corrosion free and
              functional. Cleaning underneath
              rooftop solar panels are also vital
              to a maintenance schedule.
            </p>
            <p>
              If not maintained, these areas will
              experience large amounts of
              moisture, moss and debris build up
              around the “panel to roof” fixing
              which can lead to major leaks. This
              will often be where failures occur.
            </p>
          </Col>

          <Col xs={12} md={12} lg={6}>
            <Image
              src={cleantech3}
              alt="Solar panels"
              fluid
              className="image-size"
            />
          </Col>
          <Col xs={12} md={12} lg={6}>
            <Image
              src={cleantech5}
              alt="School buildings"
              fluid
              className="image-size"
            />
          </Col>
          <Col xs={12} md={12} lg={6}>
            <h5 className="text-center title">
              <TbBellSchool /> School Buildings
            </h5>
            <p>
              Regular cleaning of school building
              roofs is important to prevent the
              buildup of debris, leaves, and other
              materials that can clog gutters and
              drains. This can lead to water
              damage, leaks, and other costly
              repairs. A clean roof also helps to
              maintain the structural integrity of
              the building and can improve the
              overall appearance of the school.
            </p>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <h5 className="text-center title">
              <SiSeat /> Stadium Service
            </h5>
            <p>
              Stadium washes and maintenance is an
              essential aspect of any sports or
              entertainment venue. Providing
              comfortable and clean environment
              for spectators is important to
              creating a positive experience for
              fans. In our experience these
              require a hybrid of pressure washing
              and manual soft washing to ensure
              all internal, external, seating or
              under eve areas are kept clean and
              corrosion free.
            </p>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <Image
              src={cleantech2}
              alt="Stadium seating"
              fluid
              className="image-size"
            />
          </Col>
          <Col xs={12} md={12} lg={6}>
            <Image
              src={cleantech1}
              alt="Saftey harness"
              fluid
              className="image-size"
            />
          </Col>
          <Col xs={12} md={12} lg={6}>
            <h5 className="text-center title">
              <MdOutlineHealthAndSafety /> Health
              and Safety
            </h5>
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
              heights qualified.{' '}
            </p>
            <p>
              Safe accessibility and a stable
              working platform is a key ingredient
              to our day to day operations. We
              have ample experience in the
              operating of scissor lifts, cherry
              pickers, extendable ladders and the
              construction of mobile scaffolding.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Services
