import React from 'react'
import { useParams } from 'react-router'
const Product = (props) => {
let params = useParams()
let products = props.products.find(item => item.id == params.id) === 
undefined ? {name : "Not Found", price : "Not Found"} : props.products.find(item => item.id == params.id)
  return (
    <div>
      Product ID : {params.id} <br />
      Product Name : {products.name} <br />
      Product Price : {products.price}  
    </div>
  )
}

export default Product
