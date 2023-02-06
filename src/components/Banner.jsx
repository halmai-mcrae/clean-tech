import React from 'react'
import { Container, Image } from 'react-bootstrap'
import banner from '../assets/banner.png'

const Banner = () => {
  return (
    <Container>
      <Image src={banner} alt="Banner" fluid/>
    </Container>
  )
}

export default Banner