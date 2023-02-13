import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from 'react-bootstrap'

// Icons
import {
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa'
import { IoMdContact } from 'react-icons/io'
import { AiOutlineForm } from 'react-icons/ai'

// Styles
import './Contact.css'

const Contact = () => {
  const form = useRef(null)
  const [showAlert, setShowAlert] =
    useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setShowAlert(true)
    emailjs
      .sendForm(
        'service_it4gqsh',
        'template_kv5t2hu',
        form.current,
        'ucKpajsa8GadSBksi'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    form.current.reset()
  }

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h5><IoMdContact/> Contact Us</h5>
          <p>
            Fill out the contact form or send a
            text.
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
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group>
              <h5><AiOutlineForm /> Enquiry Form</h5>
              <Form.Control
                type="text"
                name="from_name"
                id="from_name"
                placeholder="Enter your name or company"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
              </Form.Label>
              <Form.Control
                type="text"
                htmlFor="phone"
                name="phone"
                id="phone"
                placeholder="Enter phone number"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
              </Form.Label>
              <Form.Control
                type="email"
                htmlFor="reply_to"
                name="reply_to"
                id="reply_to"
                placeholder="Enter email address"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
              </Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={3}
                placeholder="Please type your message here..."
              />
            </Form.Group>
            <Button
              variant="secondary"
              type="submit"
              style={{ margin: '10px' }}
            >
              Submit
            </Button>
          </Form>
          {showAlert && (
            <div
              className="alert alert-success"
              role="alert"
            >
              Message sent!
            </div>
          )}
        </Col>
      </Row>
      <p className="copyright">
        Copyright © 2022 Clean Technologies Ltd |
        All Rights Reserved
      </p>
    </Container>
  )
}

export default Contact
