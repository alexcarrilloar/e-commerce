import React from 'react'
import Link from 'next/link'

function HeroBanner() {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>SMALL TEXT</p>
        <h3>MIDTEXT</h3>
        <img src="" alt="libretas"
          className='hero-banner-image'/>
        <div>
          <Link href="/product/ID">
            <button type="button">BUTTON TEXT</button>
          </Link>
          <div className='desc'>
            <h5>Descripción</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner