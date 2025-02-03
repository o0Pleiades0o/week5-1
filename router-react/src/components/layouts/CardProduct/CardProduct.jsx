import React from 'react'
import { useNavigate } from 'react-router'
import { useCart } from "../../CartContext";
import { toast } from 'react-toastify'
import "./CardProduct.css"

const CardProducts = (props) => {
    const navigate = useNavigate()
    const { addToCart } = useCart()

     const handleClick = () => {
        navigate(`/product/${encodeURIComponent(props.item.Name)}`)
    }

    const handleBagClick = (e) => {
        e.stopPropagation();
        addToCart(props.item)
        toast.success(`Added ${props.item.Name} to cart!`, {
            position: "top-right",
            autoClose: 2000,
        })
    }

    return (
        <div className="card" style={{ width: '18rem' }} onClick={handleClick}>
            <img src={props.item.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.item.Name}</h5>
                <p className="card-text">{props.item.Description}</p>
                <div className='d-flex align-items-center justify-content-between'>
                    <h5 className='fw-bold'>${props.item.Price}</h5>
                    <button 
                        className="btn btn-dark"
                        onClick={handleBagClick}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardProducts