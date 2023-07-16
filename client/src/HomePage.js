import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';

const HomePage = () => {
    const location = useLocation();

    return (
        <div className="App">
            <nav className="navbar">
                <Link to="/"><img className="logo" src="https://1000logos.net/wp-content/uploads/2021/06/Zoom-Logo.png" alt="logo" height="50" /></Link>
                <div className="nav-links">
                    <ul>
                        <li><Link to="/" className={location.pathname === '/' ? 'home-link' : ''}>Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <h1 className="title">Welcome to Voice Enabled Zoom Bot</h1>
                <p className="subtitle">This bot can listen, speak, understand and reply!</p>
            </div>
        </div>
    );
}

export default HomePage;