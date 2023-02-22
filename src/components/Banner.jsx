import React from 'react'
import { Image } from 'react-bootstrap'

// Assets
import banner from '../assets/banner.png'

// Styles
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner-container">
      <Image
        id="banner"
        src={banner}
        alt="Banner"
        style={{
          marginTop: '5rem',
        }}
        fluid
      />
      <h1>Commercial Roof Maintenance.</h1>
      <h3>Nationwide New Zealand.</h3>
    </div>
  )
}

export default Banner
