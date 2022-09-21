import React from 'react'

import { Product, FooterBanner, HeroBanner } from '../components';

const Home = () => {
  return (
    <>
      <HeroBanner/>
      <div className="products-heading">
        <h2>Productos más vendidos.</h2>
        <p>Las mejores ofertas en útiles escolares.</p>
      </div>

      <div className='products-container'>
        {['Product 1', 'Product 2'].map((product) => product)}
      </div>

      <FooterBanner/>
    </>
  )
}

export default Home;