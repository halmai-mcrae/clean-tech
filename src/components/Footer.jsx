import React from 'react'
import { Container, Image } from 'react-bootstrap'
import footer from '../assets/footer.png'

const Footer = () => {
  return (
    <>
      <Image src={footer} alt="footer" fluid />
      <Container>
        <p className="copyright">
          Copyright © 2022 Clean Technologies Ltd
          | All Rights Reserved
        </p>
      </Container>
    </>
  )
}

export default Footer
