import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import Products from '../../Data'
import { useCart } from "../CartContext";

const Product = () => {
  const { productName } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  // Find the specific product
  const product = Products.find(item => item.Name === decodeURIComponent(productName))

  if (!product) {
    return <div>Product Not Found</div>
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    toast.success(`Added ${quantity} ${product.Name} to cart!`, {
      position: "top-right",
      autoClose: 2000,
    })
  }

  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      setQuantity(prev => prev + 1)
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  return (
    <div className="container my-5">
      <div className="row">
        {/* Product Image - Left Side */}
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.Name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: '500px', objectFit: 'cover', marginBottom: '2rem' }}
          />
        </div>

        {/* Product Details - Right Side */}
        <div className="col-md-6">
          <div className="product-details">
            <h1 className="display-5 fw-bold mb-3">{product.Name}</h1>
            <p className="lead text-muted mb-4">{product.Description}</p>

            <div className="price-section mb-4">
              <h2 className="text-dark fw-bold">${product.Price}</h2>
            </div>

            {/* Quantity Selector */}
            <div className="quantity-selector d-flex align-items-center mb-4">
              <button
                className="btn btn-outline-dark me-3"
                onClick={() => handleQuantityChange('decrease')}
              >
                -
              </button>
              <span className="quantity mx-3">{quantity}</span>
              <button
                className="btn btn-outline-dark ms-3"
                onClick={() => handleQuantityChange('increase')}
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <div className="d-grid">
              <button
                className="btn btn-dark btn-lg"
                onClick={handleAddToCart}
              >
                Add to Cart
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-bag ms-2" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product