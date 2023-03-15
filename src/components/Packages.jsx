import React from 'react'
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'

// Icons
import { BsCheck } from 'react-icons/bs'
import { AiFillFilePdf } from 'react-icons/ai'
import {
  MdOutlineOtherHouses,
  MdOtherHouses,
} from 'react-icons/md'

// Styles
import './Packages.css'

// PDFs
import TempInfo from '../assets/TempInfoPDFWebsite.pdf'

const Packages = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="package-card-1" md={6}>
            <h6
              className="text-center"
              style={{ whiteSpace: 'nowrap' }}
            >
              <MdOtherHouses /> New Structure
              Maintenance Plan
            </h6>
            <hr />
            <p>
              Designed to maintain your warranty
              obligations, keeping your investment
              protected and looking brand new for
              years to come
            </p>
            <ul>
              <li>
                <BsCheck /> Tailored to your
                specific warranty requirements for
                ensured security
              </li>
              <li>
                <BsCheck /> Certifcate of health
              </li>
              <li>
                <BsCheck /> Two annual inspections
                and detailed service reports
              </li>
            </ul>
            <h6 className="text-center">
              <a
                href={TempInfo}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFilePdf /> Download PDF
                Infosheet
              </a>
            </h6>
          </Col>
          <Col className="package-card-0" md={6}>
            <h6
              className="text-center content"
              style={{ whiteSpace: 'nowrap' }}
            >
              <MdOutlineOtherHouses /> Existing
              Stucture Maintenance Plan
            </h6>
            <hr className="content"></hr>
            <p className="content">
              Customised for each individual job
              to extend the life of your roof and
              cladding, and provide solutions for
              wear and tear
            </p>
            <ul className="content">
              <li>
                <BsCheck /> Tailored to your
                specific warranty and care
                requirements for peace of mind
              </li>
              <li>
                <BsCheck /> Certifcate of health
              </li>
              <li>
                <BsCheck /> Two annual inspections
                and detailed service reports
              </li>
            </ul>
            <h6 className="text-center content">
              <a
                href={TempInfo}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFilePdf /> Download PDF
                Infosheet
              </a>
            </h6>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Packages
