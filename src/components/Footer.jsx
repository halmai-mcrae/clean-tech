import React from 'react'
import { Image } from 'react-bootstrap'

// Assets
import footer from '../assets/footer.png'

const Footer = () => {
  return (
    <>
      <Image
        id="footer"
        src={footer}
        alt="footer"
        fluid
      />
    </>
  )
}

export default Footer
