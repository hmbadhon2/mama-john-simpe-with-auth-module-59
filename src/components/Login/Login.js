import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <div className="form-control">
                <label htmlFor="email"> Email</label>
                <input type="email" name='email' placeholder=' Your email' />
            </div>

            <div className="form-control">
                <label htmlFor="password"> password</label>
                <input type="password" name='password' placeholder='our password' />
            </div>
        </div>
    );
};

export default Login; 