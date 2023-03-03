import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Images
import cleantech4 from '../assets/cleantech4.png'
import cleantech3 from '../assets/cleantech3.png'

const Links = () => {
  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center flex-nowrap">
        <Col
          xs={6}
          md={5}
          lg={4}
          className="mb-4"
        >
          <Card bg="white" text="white">
            <Link
              to={'/contact'}
              className="stretched-link"
            ></Link>
            <Card.Img
              src={cleantech4}
              alt="Card background"
              className="card-img"
            />
            <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
              <Card.Title>
                <h5>Contact Us</h5>
              </Card.Title>
              <Card.Text>Click here.</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col
          xs={6}
          md={5}
          lg={4}
          className="mb-4"
        >
          <Card bg="white" text="white">
            <a
              href="#"
              className="stretched-link"
            ></a>
            <Card.Img
              src={cleantech3}
              alt="Card background"
              className="card-img"
            />
            <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
              <Card.Title>
                <h5>Corrosion Info</h5>
              </Card.Title>
              <Card.Text>Learn more.</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Links
