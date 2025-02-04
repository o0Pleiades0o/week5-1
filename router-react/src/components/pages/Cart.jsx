import React, { useState } from 'react'
import { useCart } from "../CartContext";
import { toast } from 'react-toastify'

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleCheckout = () => {
    setIsCheckingOut(true)
    clearCart()

    toast.success('Order placed successfully!', {
      position: "top-center",
      autoClose: 3000,
      onClose: () => setIsCheckingOut(false)
    })
  }

  const handleQuantityChange = (item, type) => {
    if (type === 'increase') {
      addToCart(item, 1)
    } else if (type === 'decrease' && item.quantity > 1) {
      addToCart(item, -1)
    }
  }

  const { addToCart } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="container text-center my-5">
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added any items to your cart yet.</p>
      </div>
    )
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          {cartItems.map((item) => (
            <div key={item.Name} className="card mb-3">
              <div className="card-body d-flex justify-content-between">
                <div className="d-flex">
                  <img
                  className='rounded'
                    src={item.image}
                    alt={item.Name}
                    style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '15px' }}
                  />
                  <div>
                    <h5 className="card-title">{item.Name}</h5>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-dark btn-sm me-2"
                        onClick={() => handleQuantityChange(item, 'decrease')}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-outline-dark btn-sm ms-2"
                        onClick={() => handleQuantityChange(item, 'increase')}
                      >
                        +
                      </button>
                    </div>
                    <p className="card-text">
                      ${item.Price} x {item.quantity} = ${(item.Price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.Name)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <p>Total Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
              <h3>Total: ${getTotalPrice()}</h3>
              <button
                className="btn btn-dark btn-lg w-100 mt-3"
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? 'Processing...' : 'Checkout'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart