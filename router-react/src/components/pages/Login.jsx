import React from 'react'
import { NavLink } from 'react-router'

const Login = () => {
    //Create dummy Admin and User Account
    

  return (
    <div className="container py-5">
        <div className='mx-5'>
            <h2>Login with Email</h2>
            <p>If you already have an online Shopland account, simply use the email address you previously registered in your member login.</p>
            <form className="my-5">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check d-flex justify-content-between">
                    <div>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <div>
                        <a href="">Forget Password </a>
                        <label> | </label>
                        <a href=""><NavLink to={'/Register'}> Don't have account?</NavLink></a>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login