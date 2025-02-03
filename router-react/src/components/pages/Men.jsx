import React from 'react'
import Products from '../../Data.jsx'
import CardProducts from '../layouts/CardProduct/CardProduct';

const Men = () => {
  const manProducts = Products.filter(product => product.tag === 'men');
  return (
    <>
      <h1 className='fw-bold text-center'>Men</h1>
      <hr className='w-75 mx-auto py-2' />
      <div className='d-flex flex-wrap justify-content-center pb-5 gap-4 sm:mx-3 md:mx-5 lg:mx-10'>
        {manProducts.map((item, index) => (
          <CardProducts key={index} item={item} />
        ))}
      </div>
    </>
  )
}

export default Men