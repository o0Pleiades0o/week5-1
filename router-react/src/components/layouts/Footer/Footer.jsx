import React from 'react'
import { NavLink } from 'react-router'

const Footer = () => {
    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><NavLink to='/' className="nav-link px-2 text-body-secondary">Home</NavLink></li>
                    <li className="nav-item"><NavLink to='/Women' className="nav-link px-2 text-body-secondary">Women</NavLink></li>
                    <li className="nav-item"><NavLink to='/Men' className="nav-link px-2 text-body-secondary">Men</NavLink></li>
                    <li className="nav-item"><NavLink to='/Kids' className="nav-link px-2 text-body-secondary">Kids</NavLink></li>
                </ul>
                <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
            </footer>
        </div>
    )
}

export default Footer