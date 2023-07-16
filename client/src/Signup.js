import React from 'react';
import './App.css';

function Signup() {
    return (
        <div className="container">
            <h1 className="title">Signup</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" required />
                </label>
                <input type="submit" value="Signup" />
            </form>
        </div>
    );
}

export default Signup;