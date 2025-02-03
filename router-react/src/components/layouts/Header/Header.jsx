import React from 'react';
import { NavLink } from 'react-router';
import { useCart } from "../../CartContext";

const Header = () => {
  const { cartItems } = useCart();

  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-bootstrap me-2" viewBox="0 0 16 16">
              <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"></path>
              <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z"></path>
            </svg>
          </a>
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 d-flex flex-row">
            <li>
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-2 link-body-emphasis ${isActive ? 'active' : ''}`
                } 
                to='/' 
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-2 link-body-emphasis ${isActive ? 'active' : ''}`
                } 
                to='/women'
              >
                Women
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-2 link-body-emphasis ${isActive ? 'active' : ''}`
                } 
                to='/men'
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-2 link-body-emphasis ${isActive ? 'active' : ''}`
                } 
                to='/kids'
              >
                Kids
              </NavLink>
            </li>
          </ul>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>
          <div className="dropdown text-end">
            <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width={32} height={32} className="rounded-circle" />
            </a>
            <ul className="dropdown-menu text-small">
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
          <NavLink 
            className={({ isActive }) => 
              `nav-link px-2 link-body-emphasis position-relative ${isActive ? 'active' : ''}`
            } 
            to='/cart'
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            {cartItems.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;