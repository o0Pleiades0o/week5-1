import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Dummy Admin and User Account
    const admin = {
        email: "admin@gmail.com",
        password: "admin"
    };

    const user = {
        email: "user@gmail.com",
        password: "user"
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === admin.email && password === admin.password) {
            navigate('/DashBorad');
        } else if (email === user.email && password === user.password) {
            navigate('/');
        } else {
            alert('Invalid Email or Password');
        }
    };

    return (
        <div className="container py-5">
            <div className='mx-5'>
                <h2>Login with Email</h2>
                <p>If you already have an online Shopland account, simply use the email address you previously registered in your member login.</p>
                <form className="my-5" onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-3 form-check d-flex justify-content-between">
                        <div>
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        <div>
                            <a href="">Forget Password </a>
                            <label> | </label>
                            <Link to="/Register">Don't have account?</Link>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;