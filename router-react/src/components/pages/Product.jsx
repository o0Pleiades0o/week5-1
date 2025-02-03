import React from 'react'
import { useParams } from 'react-router'

const Product = () => {
let params = useParams()
  return (
    <div>
      Product :id {params.id}
    </div>
  )
}

export default Product
