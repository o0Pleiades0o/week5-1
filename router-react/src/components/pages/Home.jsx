import React from 'react'
import Carousel from '../layouts/Carousel/Carousel'
import CardProducts from '../layouts/CardProduct/CardProduct';
import Products from '../../Data.jsx';

const home = () => {
  const womanProducts = Products.filter(product => product.tag === 'women').slice(0, 4);
  const manProducts = Products.filter(product => product.tag === 'men').slice(0, 4);
  const kidsProducts = Products.filter(product => product.tag === 'kids').slice(0, 4);

  return (
    <div>
       <Carousel />
       <div className='bg-light container-fluid py-5'>
        <div className='container'>

          {/* womanProduct */}
          <h1 className='fw-bold text-center'>Women</h1>
          <hr className='w-75 mx-auto py-2' />
          <div className='d-flex flex-wrap justify-content-center pb-5 gap-4 sm:mx-3 md:mx-5 lg:mx-10'>
            {womanProducts.map((item, index) => (
              <CardProducts key={index} item={item} />
            ))}
          </div>

          {/* menProduct */}
          <h1 className='fw-bold text-center'>Men</h1>
          <hr className='w-75 mx-auto py-2' />
          <div className='d-flex flex-wrap justify-content-center pb-5 gap-4 sm:mx-3 md:mx-5 lg:mx-10'>
            {manProducts.map((item, index) => (
              <CardProducts key={index} item={item} />
            ))}
          </div>

          {/* kidsProduct */}
          <h1 className='fw-bold text-center'>Kids</h1>
          <hr className='w-75 mx-auto py-2' />
          <div className='d-flex flex-wrap justify-content-center pb-5 gap-4 sm:mx-3 md:mx-5 lg:mx-10'>
            {kidsProducts.map((item, index) => (
              <CardProducts key={index} item={item} />
            ))}
          </div>

          {/* allProduct */}
          <h1 className='fw-bold text-center'>All Products</h1>
          <hr className='w-75 mx-auto py-2' />
          <div className='d-flex flex-wrap justify-content-center pb-5 gap-4 sm:mx-3 md:mx-5 lg:mx-10'>
            {Products.map((item, index) => (
              <CardProducts key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default home
