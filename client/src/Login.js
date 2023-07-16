import React from 'react';
import './App.css';

function Login() {
    return (
        <div className="container">
            <h1 className="title">Login</h1>
            <form>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" required />
                </label>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
}

export default Login;