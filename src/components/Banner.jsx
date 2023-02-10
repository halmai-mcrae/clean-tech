import React from 'react'
import { Image } from 'react-bootstrap'
import banner from '../assets/banner.png'

const Banner = () => {
  return (
    <Image
      src={banner}
      alt="Banner"
      style={{
        marginTop: '6rem',
        marginBottom: '2rem',
      }}
      fluid
    />
  )
}

export default Banner
