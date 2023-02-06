import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";


// Icons
import {
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';

// Styles
import './Contact.css'

const Contact = () => {
  return (
    <footer>
    <Container>
      <Row>
        <Col md={6}>
          <h5>Contact Us</h5>
          <p>
          Fill out the contact form or send a text.
          </p>
          <p>
          We aim to respond within 24 hours.
          </p>
          <div className="app__footer-cards">
          <div className="app__footer-card">
          <FaPhone />
          &nbsp;&nbsp;
            <a
              href="tel:+64 27 365 8483"
              className="p-text"
              rel="noreferrer"
            >
              +64 27 365 8483
            </a>
          </div>
          <div className="app__footer-card">
          <FaEnvelope />
          &nbsp;&nbsp;
            <a
              href="mailto:admin@cleantechmaintenance.co.nz"
              target="_blank"
              className="p-text"
              rel="noreferrer"
            >
              admin@cleantechmaintenance.co.nz
            </a>
          </div>
          </div>
          {/* <h5>Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul> */}
        </Col>
        <Col md={6}>
          <Form>
          <Form.Group controlId="formBasicName">
                <Form.Label><h6>Name</h6></Form.Label>
                <Form.Control type="text" placeholder="Enter your name or company" />
              </Form.Group>
              <Form.Group controlId="formBasicPhone">
                <Form.Label><h6>Phone</h6></Form.Label>
                <Form.Control type="tel" placeholder="Enter phone number" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
              <Form.Label><h6>Email</h6></Form.Label>
              <Form.Control type="email" placeholder="Enter email address" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label><h6>Message</h6></Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="secondary" type="submit"
            style = {{margin: '10px'}}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </footer>
);
}

export default Contact