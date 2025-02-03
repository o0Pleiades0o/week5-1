import React from 'react'
import CardProducts from '../layouts/CardProduct/CardProduct';
import Products from '../../Data.jsx';

const Kids = () => {
  const kidsProducts = Products.filter(product => product.tag === 'kids')
  return (
    <>
      <h1 className='fw-bold text-center'>Kids</h1>
      <hr className='w-75 mx-auto py-2' />
      <div className='d-flex flex-wrap justify-content-center pb-5 gap-4 sm:mx-3 md:mx-5 lg:mx-10'>
        {kidsProducts.map((item, index) => (
          <CardProducts key={index} item={item} />
        ))}
      </div>
    </>
  )
}

export default Kids