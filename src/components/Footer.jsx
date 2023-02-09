import React from 'react'
import { Container, Image } from 'react-bootstrap'
import footer from '../assets/footer.png'

const Footer = () => {
  return (
    <Container className='my-5'>
      <Image src={footer} alt="footer" fluid/>
      <p className='copyright'>
      Copyright © 2022 Clean Technologies Ltd | All Rights Reserved
      </p>
    </Container>
  )
}

export default Footer