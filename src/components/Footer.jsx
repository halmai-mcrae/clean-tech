import React from 'react'
import { Container, Image } from 'react-bootstrap'
import footer from '../assets/footer.png'

const Footer = () => {
  return (
    <Container>
      <Image src={footer} alt="footer" fluid/>
    </Container>
  )
}

export default Footer